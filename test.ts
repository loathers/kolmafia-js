import * as km from ".";
import { expectType } from "ts-expect";

expectType<km.Item>(km.Item.get("lime"));
expectType<km.Item[]>(km.Item.get(["lime", "lemon"]));


function getGenericSingular<T extends km.MafiaClass>(c: typeof km.MafiaClass & (new () => T)) {
    return c.get<T>("a");
}

function getGenericPlural<T extends km.MafiaClass>(c: typeof km.MafiaClass & (new () => T)) {
    return c.get<T>(["a", "b"]);
}

expectType<km.Monster>(getGenericSingular(km.Monster));
expectType<km.Item[]>(getGenericPlural(km.Item));