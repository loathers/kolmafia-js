import ts, { createPrinter } from "typescript";
import yargs from "yargs/yargs";
import { promises as fs } from "fs";
import { parse, HTMLElement } from "node-html-parser";
import TurndownService from "turndown";
import { camelCase } from "change-case";

import typeOverrides from "./typeOverrides.json"; 

const TypeMap = {
  "java.lang.String": "string",
  "int": "number",
  "long": "number",
  "double": "number",
  "java.lang.Integer": "number",
  "boolean": "boolean",
};

type JavaType = keyof typeof TypeMap;

type Await<T> = T extends { then(onfulfilled?: (value: infer U) => unknown): unknown; } ? U : T;

const Modifiers = {
  Abstract: ts.factory.createModifier(ts.SyntaxKind.AbstractKeyword),
  Declare: ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword),
  Export: ts.factory.createModifier(ts.SyntaxKind.ExportKeyword),
  Readonly: ts.factory.createModifier(ts.SyntaxKind.ReadonlyKeyword),
  Static: ts.factory.createModifier(ts.SyntaxKind.StaticKeyword),
};

class GenerateTypings {
  static MafiaClass = ts.createIdentifier("MafiaClass");

  static parseDataList(root: HTMLElement) {
    const dl = root.querySelector("dl");
    if (!dl) return [];
    return [...dl.childNodes]
      .filter(n => n.nodeType === 1)
      .reduce((acc, v, i, arr) => (i % 2 === 0) ? { ...acc, [v.innerText]: arr[i + 1] as HTMLElement } : acc, {} as { [label: string]: HTMLElement });
  }

  static resolveType(method: HTMLElement, dl: ReturnType<typeof GenerateTypings.parseDataList>) {
    const javaType = method.querySelector("span.returnType").innerText as JavaType;

    if (TypeMap[javaType]) {
      return TypeMap[javaType];
    }

    if ("Return Type:" in dl) {
      return dl["Return Type:"].innerText.replace(/Proxy$/, "");
    }

    return "any";
  }

  static aggregateTypeToTypeScript(proxyRecord: Await<ReturnType<GenerateTypings["parseProxyRecord"]>>) {
    const MafiaClassExpression = ts.createExpressionWithTypeArguments(undefined, GenerateTypings.MafiaClass);
    const MafiaClassHeritage = ts.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [MafiaClassExpression]);

    const props = proxyRecord.fields.flatMap(f => {
      const type = ts.factory.createTypeReferenceNode(f.type, undefined);
      const tags: ts.JSDocTag[] = [];
      // @ts-ignore
      const doc = ts.factory.createJSDocComment(f.description, tags) as ts.PropertyDeclaration;
      return [doc, ts.factory.createPropertyDeclaration(undefined, [Modifiers.Readonly], f.name, undefined, type, undefined)];
    });
    return ts.factory.createClassDeclaration(undefined, [Modifiers.Declare], proxyRecord.className, undefined, [MafiaClassHeritage], props);
  }

  static createMafiaClass() {
    const t = ts.factory.createIdentifier("T");
    const typeT = ts.factory.createTypeReferenceNode(t);
    const typeArrayOfT = ts.factory.createArrayTypeNode(typeT);
    const typeString = ts.factory.createTypeReferenceNode("string", undefined);
    const typeArrayOfString = ts.factory.createArrayTypeNode(typeString);

    const tParam = ts.factory.createTypeParameterDeclaration(t, undefined, undefined);

    const name = ts.factory.createParameterDeclaration(undefined, undefined, undefined, "name", undefined, typeString, undefined);
    const names = ts.factory.createParameterDeclaration(undefined, undefined, undefined, "names", undefined, typeArrayOfString, undefined);


    const props = [
      ts.factory.createMethodDeclaration(undefined, [Modifiers.Static], undefined, "get", undefined, [tParam], [name], typeT, undefined),
      ts.factory.createMethodDeclaration(undefined, [Modifiers.Static], undefined, "get", undefined, [tParam], [names], typeArrayOfT, undefined),
      ts.factory.createMethodDeclaration(undefined, [Modifiers.Static], undefined, "all", undefined, [tParam], [], typeArrayOfT, undefined),
    ];
    return ts.factory.createClassDeclaration(undefined, [Modifiers.Declare, Modifiers.Abstract], GenerateTypings.MafiaClass, undefined, undefined, props);
  }

  static runtimeMethodToTypeScript(method: Await<ReturnType<GenerateTypings["getListOfRuntimeMethods"]>>[0]) {
    const any = ts.factory.createTypeReferenceNode("any", undefined);
    const params = method.args.map(a => ts.factory.createParameterDeclaration(undefined, undefined, undefined, a, undefined, any, undefined));
    return ts.factory.createFunctionDeclaration(undefined, [Modifiers.Export], undefined, camelCase(method.name), undefined, params, any, undefined);
  }

  static parseArgs(args: string) {
    return args.substring(8, args.length - 1).split(",").map(a => a.split("&nbsp;")[1]).slice(1);
  }

  javadocsPath: string;
  refPath: string;
  turndown = new TurndownService();

  constructor(javadocsPath: string, refPath: string) {
    this.javadocsPath = javadocsPath;
    this.refPath = refPath;
  }

  async parseJavadoc(fileName: string) {
    return parse(await fs.readFile(`${this.javadocsPath}/net/sourceforge/kolmafia/textui/${fileName}.html`, "utf8"));
  }

  async getListOfRuntimeMethods() {
    const root = await this.parseJavadoc("RuntimeLibrary");
    const methods = root.querySelectorAll(".memberSummary tbody .colSecond code");

    return methods.map(m => {
      const signature = m.childNodes[1];

      return {
        name: m.querySelector(".memberNameLink").innerText,
        args: signature ? GenerateTypings.parseArgs(signature.innerText) : [],
      };
    }).filter(m => m.name !== "delete");
  }

  async getRuntimeLibrary() {
    return (await this.getListOfRuntimeMethods()).map(m => GenerateTypings.runtimeMethodToTypeScript(m));
  }

  async getListOfProxyRecords() {
    const root = await this.parseJavadoc("parsetree/ProxyRecordValue");
    const nodes = root.querySelectorAll("section.nestedClassSummary div.memberSummary tbody th.colSecond code span a");
    return [...nodes].map(a => (a.getAttribute("href") || "").replace(/\.html$/, ""));
  }

  async parseProxyRecord(proxyRecordFile: string) {
    const root = await this.parseJavadoc(`parsetree/${proxyRecordFile}`);

    const className = root.querySelector("h1.title").innerText.replace(/^Class ProxyRecordValue.(\w+)Proxy$/, "$1");

    const methodList = root.querySelectorAll("section.methodDetails section.detail");

    const fields = [...methodList].map(method => {
      const dataList = GenerateTypings.parseDataList(method);
      const name = method.querySelector("span.memberName").innerText.replace(/^get_/, "");

      const fieldPath = `${className}.${name}` as keyof typeof typeOverrides.proxyRecords;
      const type = typeOverrides.proxyRecords[fieldPath] || GenerateTypings.resolveType(method, dataList);

      const prettyName = name.charAt(0).toUpperCase() + name.substr(1).replace(/_/g, " ");
      const description = "Returns:" in dataList ? this.turndown.turndown(dataList["Returns:"].innerHTML) : prettyName;

      return { type, name, description };
    });

    return {
      className,
      fields,
    };
  }

  async run() {
    const proxyRecordList = await this.getListOfProxyRecords();
    const runtimeLibrary = await this.getRuntimeLibrary();

    const dts = ts.createSourceFile("kolmafia.d.ts", "", ts.ScriptTarget.Latest, false, ts.ScriptKind.TS);

    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

    const aggregateTypes = [
      ...await Promise.all(proxyRecordList.map(a => this.parseProxyRecord(a))),
      ...typeOverrides.nonProxyAggregateTypes.map(className => ({ className, fields: [] })),
    ];
    const aggregateTypeNodes = aggregateTypes.map(p => GenerateTypings.aggregateTypeToTypeScript(p));

    const nodeArray = ts.factory.createNodeArray([
      ...runtimeLibrary,
      GenerateTypings.createMafiaClass(),
      ...aggregateTypeNodes,
    ]);

    return printer.printList(ts.ListFormat.MultiLine, nodeArray, dts);
  }
}

async function main() {
  const argv = yargs(process.argv)
    .options({
      javadocPath: { type: "string", demandOption: true, alias: "jd" },
      // ash buffer o; o.append(cli_execute_output("jsref")); buffer_to_file(o, "jsref.txt");
      refPath: { type: "string", demandOption: true, alias: "ref", help: "Save the output of `jsref` in the Mafia cli to a text file and specify it here" },
      outputPath: { type: "string", default: "index.d.ts" },
    })
    .help()
    .argv;

  const generateTypings = new GenerateTypings(argv.javadocPath, argv.refPath);

  const result = await generateTypings.run();

  await fs.writeFile(argv.outputPath, result);

  console.log(`Successfully output ${result.length} char(s) to ${argv.outputPath}`)
}

main();


