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


const slot = km.Slot.get("hat");
expectType<km.Slot>(slot);

const slots = km.Slot.get(["hat"]);
expectType<km.Slot[]>(slots);

expectType<km.ServantType>(km.Servant.get("Assassin").toString());
expectType<km.ServantType>(km.Servant.get("Assassin").name);