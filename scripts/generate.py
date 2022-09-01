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

    deprecated = len(func.deprecationWarning) > 0

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

    return {"name": name, "type": type, "params": zip(param_types, param_names), "deprecated": deprecated}


def format_function(desc):
    params = ", ".join(f"{p[1]}: {p[0]}" for p in desc["params"])
    formatted = ""

    if desc['deprecated']:
        formatted += f"/** @deprecated */\n"

    return formatted + f"export function {desc['name']}({params}): {desc['type']};"


def get_functions():
    return [
        format_function(describe_function(f))
        for f in km.JavascriptRuntime.getFunctions()
        if f.getName() != "delete"
    ]


def get_mafia_class_methods(type, arg_type="(string | number)"):
    return [
        f"static get{'' if type else '<T extends MafiaClass>'}(name: {arg_type}): {type if type else 'T'};",
        f"static get{'' if type else '<T extends MafiaClass>'}(names: {arg_type}[]): {type if type else 'T'}[];",
        f"static all<T{' = ' + type if type else ' extends MafiaClass'}>(): T[];",
        f"static none: {type if type else 'MafiaClass'};",
    ]


def get_abstract_mafia_class():
    return [
        "declare abstract class MafiaClass {",
        *[f"    {l}" for l in get_mafia_class_methods(None)],
        "}",
    ]


def get_to_string_method(arg_type):
    return f"toString(): {arg_type};"


def format_property(name, p, union_type=None):
    prop_name = p[1]
    pretty_prop_name = prop_name.replace("_", " ").capitalize()

    if prop_name == "name" and union_type is not None:
        type = union_type
    else:
        type = overrides["proxyRecords"].get(f"{name}.{prop_name}") or p[0]

    return [
        f"/**",
        f" * {pretty_prop_name} */",
        f"readonly {km.JavascriptRuntime.toCamelCase(prop_name)}: {type};",
    ]


def format_properties(name, properties, union_type=None):
    return [format_property(name, p, union_type) for p in properties]


def format_mafia_class(name, properties=[], values=[]):
    union_type = None
    type_string = None

    if len(values) > 0:
        arg_type = union_type = name + "Type"
        type_string = (
            "export type "
            + union_type
            + " = "
            + " | ".join([f'"{v}"' for v in values])
            + ";"
        )
    else:
        arg_type = "string"

    if name in [
        "Class",
        "Effect",
        "Familiar",
        "Item",
        "Location",
        "Monster",
        "Servant",
        "Skill",
        "Slot",
        "Thrall",
    ]:
        arg_type = f"({arg_type} | number)"

    properties = [
        line for p in format_properties(name, properties, union_type) for line in p
    ]

    return [
        *([type_string] if type_string else []),
        f"export class {name} extends MafiaClass {{",
        *[f"    {l}" for l in get_mafia_class_methods(name, arg_type)],
        *([f"    {get_to_string_method(union_type)}"] if type_string else []),
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

    values = sorted(
        [v.contentString for v in ec.allValues().content]
        if len(ec.allValues().content) < 30
        else []
    )
    return format_mafia_class(name, properties, values)


def get_enumerated_classes():
    return [line for ec in get_enumerated_types() for line in get_enumerated_class(ec)]


def main():
    lines = [*get_functions(), *get_abstract_mafia_class(), *get_enumerated_classes()]

    contents = "\n".join(lines)

    with open("../index.d.ts", "w") as file:
        file.write(contents)


main()
