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

expectType<km.Bounty[]>(km.Bounty.all());

{
    const item: km.Item = km.Item.get("None");
    const slot = km.Slot.get("familiar");

    expectType<boolean>(km.equip(slot, item));
    expectType<boolean>(km.equip(km.Slot.get("familiar"), item));
}

expectType<km.Servant>(km.Servant.none);