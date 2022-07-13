import urllib.request
import json
import re
from pymafia import km
from jnius import cast

with open("./overrides.json") as f:
    overrides = json.load(f)

jsref = km.JsRefCommand()


def get_return_type(func):
    if func.getName() == "abort":
        return "never"

    return get_type(func.getType())


def get_type(type):
    type = jsref.toJavascriptTypeName(type)

    if type in ["aggregate", "null"]:
        return "any"

    return re.sub(r"\[([^:]+?)\]", r"[key: \1]", type)


combat_filter_type = (
    "string | ((round: number, monster: Monster, text: string) => string)"
)


def get_param_types(func):
    param_types = [get_type(vr.getRawType()) for vr in func.getVariableReferences()]

    if func.getName() in ["adv1", "adventure"] and len(param_types) >= 3:
        param_types[2] = combat_filter_type

    if func.getName() == "run_combat" and len(param_types) >= 1:
        param_types[0] = combat_filter_type

    return param_types


def describe_function(func):
    name = km.JavascriptRuntime.toCamelCase(func.getName())

    type = get_return_type(func)

    param_types = get_param_types(func)

    # Get param names
    e = cast("java.lang.reflect.Executable", func.method)
    param_names = [p.getName() for p in e.getParameters()]
    param_names.pop(0)  # Remove controller
    param_names = (
        overrides["paramNames"].get(f"{name}[{','.join(param_types)}]") or param_names
    )

    if len(param_types) != len(param_names):
        raise f"{name} has mismatching param names and types"

    return {"name": name, "type": type, "params": zip(param_types, param_names)}


def format_function(desc):
    params = ", ".join(f"{p[1]}: {p[0]}" for p in desc["params"])
    return f"export function {desc['name']}({params}): {desc['type']};"


def get_functions():
    return [
        format_function(describe_function(f))
        for f in km.JavascriptRuntime.getFunctions()
        if f.getName() != "delete"
    ]


def get_mafia_class_methods(type, accept_numbers=False):
    accepted = "(string | number)" if accept_numbers else "string"
    return [
        f"static get<T{' = ' + type if type else ''}>(name: {accepted}): T;",
        f"static get<T{' = ' + type if type else ''}>(names: {accepted}[]): T[];",
        f"static all<T{' = ' + type if type else ''}>(): T[];",
    ]


def get_abstract_mafia_class():
    return [
        "declare abstract class MafiaClass {",
        *[f"    {l}" for l in get_mafia_class_methods(None)],
        "}",
    ]


def format_property(name, p):
    pretty_name = p[1].replace("_", " ").capitalize()

    type = overrides["proxyRecords"].get(f"{name}.{p[1]}") or p[0]

    return [
        f"/**",
        f" * {pretty_name} */",
        f"readonly {km.JavascriptRuntime.toCamelCase(p[1])}: {type};",
    ]


def format_properties(name, properties):
    return [format_property(name, p) for p in properties]


def format_mafia_class(name, properties=[]):
    accept_numbers = name in [
        "Effect",
        "Familiar",
        "Item",
        "Location",
        "Monster",
        "Servant",
        "Skill",
        "Slot",
        "Thrall",
    ]

    properties = [line for p in format_properties(name, properties) for line in p]

    return [
        f"export class {name} extends MafiaClass {{",
        *[f"    {l}" for l in get_mafia_class_methods(name, accept_numbers)],
        *[f"    {l}" for l in properties],
        "}",
    ]


def get_enumerated_types():
    return sorted(
        [et for et in km.DataTypes.enumeratedTypes], key=lambda et: et.getName()
    )


def get_enumerated_class(ec):
    name = ec.getName().capitalize()
    type = cast("net.sourceforge.kolmafia.textui.parsetree.RecordType", ec.asProxy())

    field_types = [get_type(ft) for ft in type.getFieldTypes()]
    properties = zip(field_types, type.getFieldNames())

    return format_mafia_class(name, properties)


def get_enumerated_classes():
    return [line for ec in get_enumerated_types() for line in get_enumerated_class(ec)]


def main():
    lines = [*get_functions(), *get_abstract_mafia_class(), *get_enumerated_classes()]

    contents = "\n".join(lines)

    with open("../index.d.ts", "w") as file:
        file.write(contents)


main()
