export function abort(string: string): void;
export function abort(): void;
export function addItemCondition(arg1: number, arg2: Item): void;
export function addItemCondition(arg1: Item, arg2: number): void;
export function adv1(locationValue: Location, adventuresUsedValue: number, filterFunction: string): boolean;
export function advCost(skill: Skill): number;
export function adventure(arg1: Location, arg2: number): boolean;
export function adventure(arg1: Location, arg2: number, filterFunction: string): boolean;
export function adventure(arg1: number, arg2: Location): boolean;
export function adventure(arg1: number, arg2: Location, filterFunction: string): boolean;
export function allMonstersWithId(): { [monster: string]: boolean };
export function allNormalOutfits(): string[];
export function appearanceRates(location: Location): { [monster: string]: number };
export function appearanceRates(location: Location, includeQueue: boolean): { [monster: string]: number };
export function append(buffer: string, s: string): string;
export function attack(): string;
export function autosell(arg1: Item, arg2: number): boolean;
export function autosell(arg1: number, arg2: Item): boolean;
export function autosellPrice(item: Item): number;
export function availableAmount(arg: Item): number;
export function availableChoiceOptions(): { [key: number]: string };
export function availableChoiceOptions(spoilers: boolean): { [key: number]: string };
export function availableChoiceSelectInputs(decision: number): { [key: string]: { [key: string]: string } };
export function availableChoiceTextInputs(decision: number): { [key: string]: string };
export function availablePocket(arg: Monster): number;
export function availablePocket(arg: Effect): number;
export function availablePocket(arg: Item): number;
export function availablePocket(arg: Stat): number;
export function batchClose(): boolean;
export function batchOpen(): void;
export function bjornifyFamiliar(familiar: Familiar): boolean;
export function blackMarketAvailable(): boolean;
export function booleanModifier(modifier: string): boolean;
export function booleanModifier(arg: string, modifier: string): boolean;
export function booleanModifier(arg: Item, modifier: string): boolean;
export function booleanModifier(arg: Effect, modifier: string): boolean;
export function buffedHitStat(): number;
export function bufferToFile(var1: string, var2: string): boolean;
export function buy(item: Item): boolean;
export function buy(arg1: Item, arg2: number): boolean;
export function buy(arg1: Item, arg2: number, arg3: number): number;
export function buy(arg1: number, arg2: Item): boolean;
export function buy(arg1: number, arg2: Item, arg3: number): number;
export function buy(arg1: Coinmaster, arg2: number, arg3: Item): boolean;
export function buyPrice(master: Coinmaster, item: Item): number;
export function buyUsingStorage(item: Item): boolean;
export function buyUsingStorage(arg1: Item, arg2: number): boolean;
export function buyUsingStorage(arg1: Item, arg2: number, arg3: number): number;
export function buyUsingStorage(arg1: number, arg2: Item): boolean;
export function buyUsingStorage(arg1: number, arg2: Item, arg3: number): number;
export function buysItem(master: Coinmaster, item: Item): boolean;
export function canDrink(): boolean;
export function canEat(): boolean;
export function canEquip(item: Item): boolean;
export function canEquip(familiar: Familiar, item: Item): boolean;
export function canFaxbot(arg: Monster): boolean;
export function canInteract(): boolean;
export function canStillSteal(): boolean;
export function canadiaAvailable(): boolean;
export function candyForTier(arg: number): Item[];
export function candyForTier(arg1: number, arg2: number): Item[];
export function ceil(arg: number): number;
export function changeMcd(level: number): boolean;
export function charAt(source: string, index: number): string;
export function chatClan(messageValue: string): void;
export function chatClan(messageValue: string, recipientValue: string): void;
export function chatMacro(macroValue: string): void;
export function chatNotify(messageValue: string, colorValue: string): void;
export function chatPrivate(recipientValue: string, messageValue: string): void;
export function chew(item: Item): boolean;
export function chew(arg1: Item, arg2: number): boolean;
export function chew(arg1: number, arg2: Item): boolean;
export function choiceFollowsFight(): boolean;
export function classModifier(arg: string, modifier: string): Class;
export function classModifier(arg: Item, modifier: string): Class;
export function clear(arg: any): void;
export function cliExecute(string: string): boolean;
export function cliExecuteOutput(string: string): string;
export function closetAmount(arg: Item): number;
export function combatManaCostModifier(): number;
export function combatRateModifier(): number;
export function containsText(source: string, search: string): boolean;
export function council(): void;
export function count(arg: any): number;
export function craft(modeValue: string, countValue: number, item1: Item, item2: Item): number;
export function craftType(arg: Item): string;
export function creatableAmount(arg: Item): number;
export function creatableTurns(itemId: Item): number;
export function creatableTurns(itemId: Item, count: number): number;
export function creatableTurns(itemId: Item, count: number, freeCrafting: boolean): number;
export function create(item: Item): boolean;
export function create(arg1: Item, arg2: number): boolean;
export function create(arg1: number, arg2: Item): boolean;
export function currentHitStat(): Stat;
export function currentMcd(): number;
export function currentPvpStances(): { [key: string]: number };
export function currentRadSickness(): number;
export function currentRound(): number;
export function dadSeaMonkeeWeakness(arg: number): Element;
export function dailySpecial(): Item;
export function damageAbsorptionPercent(): number;
export function damageReduction(): number;
export function dateToTimestamp(inFormat: string, dateTimeString: string): number;
export function debugprint(string: string): void;
export function descToEffect(value: string): Effect;
export function descToItem(value: string): Item;
export function disable(name: string): void;
export function dispensaryAvailable(): boolean;
export function displayAmount(arg: Item): number;
export function drink(item: Item): boolean;
export function drink(arg1: Item, arg2: number): boolean;
export function drink(arg1: number, arg2: Item): boolean;
export function drinksilent(item: Item): boolean;
export function drinksilent(arg1: Item, arg2: number): boolean;
export function drinksilent(arg1: number, arg2: Item): boolean;
export function dump(arg: null): void;
export function dump(arg: null, color: string): void;
export function eat(item: Item): boolean;
export function eat(arg1: Item, arg2: number): boolean;
export function eat(arg1: number, arg2: Item): boolean;
export function eatsilent(item: Item): boolean;
export function eatsilent(arg1: Item, arg2: number): boolean;
export function eatsilent(arg1: number, arg2: Item): boolean;
export function effectModifier(arg: string, modifier: string): Effect;
export function effectModifier(arg: Item, modifier: string): Effect;
export function effectPockets(): { [key: number]: boolean };
export function elementalResistance(arg: Element): number;
export function elementalResistance(): number;
export function elementalResistance(arg: Monster): number;
export function emptyCloset(): boolean;
export function enable(name: string): void;
export function endsWith(source: string, suffix: string): boolean;
export function enthroneFamiliar(familiar: Familiar): boolean;
export function entityDecode(arg: string): string;
export function entityEncode(arg: string): string;
export function equip(item: Item): boolean;
export function equip(arg1: Item, arg2: Slot): boolean;
export function equip(arg1: Slot, arg2: Item): boolean;
export function equipAllFamiliars(): boolean;
export function equippedAmount(arg: Item): number;
export function equippedItem(slot: Slot): Item;
export function eudora(): string;
export function eudora(newEudora: string): boolean;
export function everyCardName(name: string): string;
export function expectedDamage(): number;
export function expectedDamage(arg: Monster): number;
export function experienceBonus(): number;
export function expressionEval(expr: string): number;
export function extractItems(string: string): { [item: string]: number };
export function extractMeat(string: string): number;
export function familiarEquipment(familiar: Familiar): Item;
export function familiarEquippedEquipment(familiar: Familiar): Item;
export function familiarWeight(familiar: Familiar): number;
export function favoriteFamiliars(): { [familiar: string]: boolean };
export function faxbot(monsterName: Monster): boolean;
export function faxbot(monsterName: Monster, botName: string): boolean;
export function fightFollowsChoice(): boolean;
export function fileToArray(var1: string): { [key: number]: string };
export function fileToBuffer(var1: string): string;
export function fileToMap(var1: string, var2: any): boolean;
export function fileToMap(var1: string, var2: any, var3: boolean): boolean;
export function floor(arg: number): number;
export function floristAvailable(): boolean;
export function flushMonsterManuelCache(): boolean;
export function formField(key: string): string;
export function formFields(): { [key: string]: string };
export function formatDateTime(inFormat: string, dateTimeString: string, outFormat: string): string;
export function friarsAvailable(): boolean;
export function fuelCost(skill: Skill): number;
export function fullnessLimit(): number;
export function gamedayToInt(): number;
export function gamedayToString(): string;
export function gametimeToInt(): number;
export function getAllProperties(filterValue: string, globalValue: boolean): { [key: string]: boolean };
export function getAutoAttack(): number;
export function getCampground(): { [item: string]: number };
export function getCcsAction(index: number): string;
export function getChateau(): { [item: string]: number };
export function getClanId(): number;
export function getClanLounge(): { [item: string]: number };
export function getClanName(): string;
export function getClanRumpus(): { [key: string]: number };
export function getCloset(): { [item: string]: number };
export function getCounters(label: string, min: number, max: number): string;
export function getCustomOutfits(): string[];
export function getDwelling(): Item;
export function getFloristPlants(): { [location: string]: string[] };
export function getFreePulls(): { [item: string]: number };
export function getFuel(): number;
export function getGoals(): string[];
export function getIgnoreZoneWarnings(): boolean;
export function getIngredients(arg: Item): { [item: string]: number };
export function getInventory(): { [item: string]: number };
export function getLocationMonsters(location: Location): { [monster: string]: boolean };
export function getMonsterMapping(): { [monster: string]: Monster };
export function getMonsterMapping(path: string): { [monster: string]: Monster };
export function getMonsters(location: Location): Monster[];
export function getMoods(): string[];
export function getOutfits(): string[];
export function getPath(): string;
export function getPathFull(): string;
export function getPathVariables(): string;
export function getPlayerId(playerNameValue: string): string;
export function getPlayerName(playerIdValue: number): string;
export function getPower(item: Item): number;
export function getProperty(name: string): string;
export function getProperty(name: string, globalValue: boolean): string;
export function getRelated(item: Item, type: string): { [item: string]: number };
export function getRevision(): number;
export function getShop(): { [item: string]: number };
export function getShopLog(): string[];
export function getStackTrace(): { file: string; name: string; line: number; }[];
export function getStash(): { [item: string]: number };
export function getStorage(): { [item: string]: number };
export function getVersion(): string;
export function gnomadsAvailable(): boolean;
export function goalExists(check: string): boolean;
export function groupString(string: string, regex: string): { [key: number]: { [key: number]: string } };
export function guildStoreAvailable(): boolean;
export function handlingChoice(): boolean;
export function haveBartender(): boolean;
export function haveChef(): boolean;
export function haveDisplay(): boolean;
export function haveEffect(arg: Effect): number;
export function haveEquipped(item: Item): boolean;
export function haveFamiliar(familiar: Familiar): boolean;
export function haveMushroomPlot(): boolean;
export function haveOutfit(outfit: string): boolean;
export function haveServant(servant: Servant): boolean;
export function haveShop(): boolean;
export function haveSkill(arg: Skill): boolean;
export function hedgeMaze(arg: string): boolean;
export function hermit(arg1: Item, arg2: number): boolean;
export function hermit(arg1: number, arg2: Item): boolean;
export function hiddenTempleUnlocked(): boolean;
export function hippyStoneBroken(): boolean;
export function hippyStoreAvailable(): boolean;
export function historicalAge(item: Item): number;
export function historicalPrice(item: Item): number;
export function holiday(): string;
export function hpCost(skill: Skill): number;
export function imageToMonster(value: string): Monster;
export function inBadMoon(): boolean;
export function inHardcore(): boolean;
export function inMoxieSign(): boolean;
export function inMultiFight(): boolean;
export function inMuscleSign(): boolean;
export function inMysticalitySign(): boolean;
export function inaccessibleReason(master: Coinmaster): string;
export function indexOf(source: string, search: string): number;
export function indexOf(source: string, search: string, start: number): number;
export function inebrietyLimit(): number;
export function initiativeModifier(): number;
export function insert(buffer: string, index: number, s: string): string;
export function isAccessible(master: Coinmaster): boolean;
export function isBanished(arg: Monster): boolean;
export function isCoinmasterItem(item: Item): boolean;
export function isDiscardable(item: Item): boolean;
export function isDisplayable(item: Item): boolean;
export function isFamiliarEquipmentLocked(): boolean;
export function isGiftable(item: Item): boolean;
export function isGoal(item: Item): boolean;
export function isInteger(string: string): boolean;
export function isNpcItem(item: Item): boolean;
export function isOnline(arg: string): boolean;
export function isTradeable(item: Item): boolean;
export function isTrendy(thing: Item): boolean;
export function isTrendy(thing: Skill): boolean;
export function isTrendy(thing: Familiar): boolean;
export function isTrendy(thing: string): boolean;
export function isUnrestricted(thing: Item): boolean;
export function isUnrestricted(thing: Skill): boolean;
export function isUnrestricted(thing: Familiar): boolean;
export function isUnrestricted(thing: string): boolean;
export function isWearingOutfit(outfit: string): boolean;
export function itemAmount(arg: Item): number;
export function itemDropModifier(): number;
export function itemDrops(): { [item: string]: number };
export function itemDrops(arg: Monster): { [item: string]: number };
export function itemDropsArray(): { drop: Item; rate: number; type: string; }[];
export function itemDropsArray(monster: Monster): { drop: Item; rate: number; type: string; }[];
export function itemDropsArray(arg: Monster): { drop: Item; rate: number; type: string; }[];
export function itemPockets(): { [key: number]: boolean };
export function itemType(item: Item): string;
export function jokePockets(): { [key: number]: boolean };
export function jumpChance(): number;
export function jumpChance(arg: Monster): number;
export function jumpChance(arg: Monster, init: number): number;
export function jumpChance(arg: Monster, init: number, ml: number): number;
export function jumpChance(arg: Location): number;
export function jumpChance(arg: Location, init: number): number;
export function jumpChance(arg: Location, init: number, ml: number): number;
export function knollAvailable(): boolean;
export function lastChoice(): number;
export function lastDecision(): number;
export function lastIndexOf(source: string, search: string): number;
export function lastIndexOf(source: string, search: string, start: number): number;
export function lastItemMessage(): string;
export function lastMonster(): Monster;
export function lastSkillMessage(): string;
export function leetify(string: string): string;
export function length(string: string): number;
export function lightningCost(skill: Skill): number;
export function limitMode(): string;
export function loadHtml(string: string): string;
export function lockFamiliarEquipment(lock: boolean): void;
export function logN(arg: number): number;
export function logN(arg: number, base: number): number;
export function logprint(string: string): void;
export function makeUrl(arg1: string, arg2: boolean, arg3: boolean): string;
export function mallPrice(item: Item): number;
export function mallPrices(arg: { [key: number]: boolean }): number;
export function mallPrices(arg: string): number;
export function mallPrices(category: string, tiers: string): number;
export function manaCostModifier(): number;
export function mapToFile(var1: any, var2: string): boolean;
export function mapToFile(var1: any, var2: string, var3: boolean): boolean;
export function max(arg1: number, arg2: number[]): number;
export function max(arg1: number, arg2: number[]): number;
export function maximize(maximizerStringValue: string, isSpeculateOnlyValue: boolean): boolean;
export function maximize(maximizerStringValue: string, maxPriceValue: number, priceLevelValue: number, isSpeculateOnlyValue: boolean): boolean;
export function maximize(maximizerStringValue: string, maxPriceValue: number, priceLevelValue: number, isSpeculateOnlyValue: boolean, showEquipment: boolean): { display: string; command: string; score: number; effect: Effect; item: Item; skill: Skill; }[];
export function meatDrop(): number;
export function meatDrop(arg: Monster): number;
export function meatDropModifier(): number;
export function meatPockets(): { [key: number]: number };
export function min(arg1: number, arg2: number[]): number;
export function min(arg1: number, arg2: number[]): number;
export function minstrelInstrument(): Item;
export function minstrelLevel(): number;
export function minstrelQuest(): boolean;
export function modifierEval(expr: string): number;
export function monsterAttack(): number;
export function monsterAttack(arg: Monster): number;
export function monsterDefense(): number;
export function monsterDefense(arg: Monster): number;
export function monsterElement(): Element;
export function monsterElement(arg: Monster): Element;
export function monsterEval(expr: string): number;
export function monsterFactoidsAvailable(arg1: Monster, arg2: boolean): number;
export function monsterHp(): number;
export function monsterHp(arg: Monster): number;
export function monsterInitiative(): number;
export function monsterInitiative(arg: Monster): number;
export function monsterLevelAdjustment(): number;
export function monsterManuelText(arg: Monster): string;
export function monsterPhylum(): Phylum;
export function monsterPhylum(arg: Monster): Phylum;
export function monsterPockets(): { [key: number]: boolean };
export function moodExecute(multiplicity: number): void;
export function moodList(): string[];
export function moonLight(): number;
export function moonPhase(): number;
export function mpCost(skill: Skill): number;
export function myAbsorbs(): number;
export function myAdventures(): number;
export function myAscensions(): number;
export function myAudience(): number;
export function myBasestat(arg: Stat): number;
export function myBjornedFamiliar(): Familiar;
export function myBuffedstat(arg: Stat): number;
export function myClass(): Class;
export function myClosetMeat(): number;
export function myCompanion(): string;
export function myDaycount(): number;
export function myDiscomomentum(): number;
export function myEffectiveFamiliar(): Familiar;
export function myEffects(): { [effect: string]: number };
export function myEnthronedFamiliar(): Familiar;
export function myFamiliar(): Familiar;
export function myFullness(): number;
export function myFury(): number;
export function myGardenType(): string;
export function myHash(): string;
export function myHp(): number;
export function myId(): string;
export function myInebriety(): number;
export function myLevel(): number;
export function myLightning(): number;
export function myLocation(): Location;
export function myMask(): string;
export function myMaxfury(): number;
export function myMaxhp(): number;
export function myMaxmp(): number;
export function myMaxpp(): number;
export function myMeat(): number;
export function myMp(): number;
export function myName(): string;
export function myPath(): string;
export function myPathId(): number;
export function myPokeFam(arg: number): Familiar;
export function myPp(): number;
export function myPrimestat(): Stat;
export function myRain(): number;
export function myServant(): Servant;
export function mySessionAdv(): number;
export function mySessionItems(): { [item: string]: number };
export function mySessionItems(item: Item): number;
export function mySessionMeat(): number;
export function mySign(): string;
export function mySoulsauce(): number;
export function mySpleenUse(): number;
export function myStorageMeat(): number;
export function myThrall(): Thrall;
export function myThunder(): number;
export function myTurncount(): number;
export function myVykeaCompanion(): Vykea;
export function nowToInt(): number;
export function nowToString(dateFormatValue: string): string;
export function npcPrice(item: Item): number;
export function numberologyPrize(num: number): string;
export function numericModifier(modifier: string): number;
export function numericModifier(arg: string, modifier: string): number;
export function numericModifier(arg: Item, modifier: string): number;
export function numericModifier(arg: Effect, modifier: string): number;
export function numericModifier(arg: Skill, modifier: string): number;
export function numericModifier(familiar: Familiar, modifier: string, weight: number, item: Item): number;
export function outfit(outfit: string): boolean;
export function outfitPieces(outfit: string): Item[];
export function outfitTattoo(outfit: string): string;
export function overdrink(item: Item): boolean;
export function overdrink(arg1: Item, arg2: number): boolean;
export function overdrink(arg1: number, arg2: Item): boolean;
export function pathIdToName(value: number): string;
export function pathNameToId(value: string): number;
export function pickPocket(arg: Monster): boolean;
export function pickPocket(arg: Effect): { [effect: string]: number };
export function pickPocket(arg: Item): { [item: string]: number };
export function pickPocket(arg: Stat): { [stat: string]: number };
export function pickPocket(arg: number): boolean;
export function pickedPockets(): { [key: number]: boolean };
export function pickedScraps(): { [key: number]: boolean };
export function pocketEffects(pocket: number): { [effect: string]: number };
export function pocketItems(pocket: number): { [item: string]: number };
export function pocketJoke(pocket: number): string;
export function pocketMeat(pocket: number): { [key: number]: string };
export function pocketMonster(pocket: number): Monster;
export function pocketPoem(pocket: number): { [key: number]: string };
export function pocketScrap(pocket: number): { [key: number]: string };
export function pocketStats(pocket: number): { [stat: string]: number };
export function poemPockets(): { [key: number]: number };
export function potentialPockets(arg: Monster): { [key: number]: number };
export function potentialPockets(arg: Effect): { [key: number]: number };
export function potentialPockets(arg: Item): { [key: number]: number };
export function potentialPockets(arg: Stat): { [key: number]: number };
export function print(): void;
export function print(string: string): void;
export function print(string: string, color: string): void;
export function printHtml(string: string): void;
export function propertyDefaultValue(nameValue: string): string;
export function propertyExists(nameValue: string): boolean;
export function propertyExists(nameValue: string, globalValue: boolean): boolean;
export function propertyHasDefault(nameValue: string): boolean;
export function pullsRemaining(): number;
export function putCloset(arg1: number): boolean;
export function putCloset(arg1: Item): boolean;
export function putCloset(arg1: Item, arg2: number): boolean;
export function putCloset(arg1: number, arg2: Item): boolean;
export function putDisplay(arg1: number, arg2: Item): boolean;
export function putDisplay(arg1: Item, arg2: number): boolean;
export function putShop(priceValue: number, limitValue: number, itemValue: Item): boolean;
export function putShop(priceValue: number, limitValue: number, qtyValue: number, itemValue: Item): boolean;
export function putShopUsingStorage(priceValue: number, limitValue: number, itemValue: Item): boolean;
export function putShopUsingStorage(priceValue: number, limitValue: number, qtyValue: number, itemValue: Item): boolean;
export function putStash(arg1: Item, arg2: number): boolean;
export function putStash(arg1: number, arg2: Item): boolean;
export function pvpAttacksLeft(): number;
export function rainCost(skill: Skill): number;
export function random(arg: number): number;
export function rawDamageAbsorption(): number;
export function refreshShop(): boolean;
export function refreshStash(): boolean;
export function refreshStatus(): boolean;
export function removeItemCondition(arg1: number, arg2: Item): void;
export function removeItemCondition(arg1: Item, arg2: number): void;
export function removeProperty(nameValue: string): string;
export function removeProperty(nameValue: string, globalValue: boolean): string;
export function renameProperty(oldNameValue: string, newNameValue: string): boolean;
export function replace(buffer: string, start: number, finish: number, s: string): string;
export function replaceString(source: string, searchValue: string, replaceValue: string): string;
export function replaceString(source: string, searchValue: string, replaceValue: string): string;
export function repriceShop(priceValue: number, itemValue: Item): boolean;
export function repriceShop(priceValue: number, limitValue: number, itemValue: Item): boolean;
export function restorationPockets(): { [key: number]: boolean };
export function restoreHp(amount: number): boolean;
export function restoreMp(amount: number): boolean;
export function retrieveItem(item: Item): boolean;
export function retrieveItem(arg1: Item, arg2: number): boolean;
export function retrieveItem(arg1: number, arg2: Item): boolean;
export function reverseNumberology(): { [key: number]: number };
export function reverseNumberology(advDelta: number, spleenDelta: number): { [key: number]: number };
export function rollover(): number;
export function round(arg: number): number;
export function runChoice(decision: number): string;
export function runChoice(decision: number, extra: string): string;
export function runChoice(decision: number, extra: boolean): string;
export function runChoice(decision: number, custom: boolean, more: string): string;
export function runCombat(): string;
export function runCombat(filterFunction: string): string;
export function runTurn(): string;
export function runaway(): string;
export function scrapPockets(): { [key: number]: number };
export function sell(master: Coinmaster, countValue: number, itemValue: Item): boolean;
export function sellPrice(master: Coinmaster, item: Item): number;
export function sellsItem(master: Coinmaster, item: Item): boolean;
export function sessionLogs(dayCount: number): string[];
export function sessionLogs(player: string, dayCount: number): string[];
export function sessionLogs(playerName: string, baseDate: string, count: number): string[];
export function setAutoAttack(attackValue: number): void;
export function setAutoAttack(attackValue: string): void;
export function setLength(buffer: string, i: number): void;
export function setLocation(location: Location): void;
export function setProperty(nameValue: string, value: string): void;
export function shopAmount(arg: Item): number;
export function shopLimit(arg: Item): number;
export function shopPrice(item: Item): number;
export function skillModifier(arg: string, modifier: string): Skill;
export function skillModifier(arg: Item, modifier: string): Skill;
export function slashCount(arg: Item): number;
export function soulsauceCost(skill: Skill): number;
export function spleenLimit(): number;
export function splitString(string: string): string[];
export function splitString(string: string, regex: string): string[];
export function squareRoot(val: number): number;
export function startsWith(source: string, prefix: string): boolean;
export function stashAmount(arg: Item): number;
export function statBonusToday(): Stat;
export function statBonusTomorrow(): Stat;
export function statModifier(arg: Effect, modifier: string): Stat;
export function statsPockets(): { [key: number]: boolean };
export function steal(): string;
export function stillsAvailable(): number;
export function stopCounter(label: string): void;
export function storageAmount(arg: Item): number;
export function stringModifier(modifier: string): string;
export function stringModifier(arg: string, modifier: string): string;
export function stunSkill(): Skill;
export function substring(source: string, start: number): string;
export function substring(source: string, start: number, finish: number): string;
export function svnAtHead(project: string): boolean;
export function svnExists(project: string): boolean;
export function svnInfo(script: string): { url: string; revision: number; last_changed_author: string; last_changed_rev: number; last_changed_date: string; };
export function sweetSynthesis(effect: Effect): boolean;
export function sweetSynthesis(arg1: number, arg2: Effect): boolean;
export function sweetSynthesis(arg1: Effect, arg2: number): boolean;
export function sweetSynthesis(arg1: number, arg2: Effect, arg3: number): boolean;
export function sweetSynthesis(arg1: Item, arg2: Item): boolean;
export function sweetSynthesis(arg1: number, arg2: Item, arg3: Item): boolean;
export function sweetSynthesisPair(arg1: Effect): Item[];
export function sweetSynthesisPair(arg1: Effect, arg2: number): Item[];
export function sweetSynthesisPairing(arg1: Effect, arg2: Item): Item[];
export function sweetSynthesisPairing(arg1: Effect, arg2: Item, arg3: number): Item[];
export function sweetSynthesisResult(item1: Item, item2: Item): Effect;
export function takeCloset(arg1: number): boolean;
export function takeCloset(arg1: Item): boolean;
export function takeCloset(arg1: Item, arg2: number): boolean;
export function takeCloset(arg1: number, arg2: Item): boolean;
export function takeDisplay(arg1: Item, arg2: number): boolean;
export function takeDisplay(arg1: number, arg2: Item): boolean;
export function takeShop(itemValue: Item): boolean;
export function takeShop(arg1: number, arg2: Item): boolean;
export function takeStash(arg1: Item, arg2: number): boolean;
export function takeStash(arg1: number, arg2: Item): boolean;
export function takeStorage(arg1: Item, arg2: number): boolean;
export function takeStorage(arg1: number, arg2: Item): boolean;
export function tavern(): number;
export function tavern(arg: string): number;
export function throwItem(item: Item): string;
export function throwItems(item1: Item, item2: Item): string;
export function thunderCost(skill: Skill): number;
export function timeToString(): string;
export function timestampToDate(timestamp: number, outFormat: string): string;
export function toBoolean(value: string): boolean;
export function toBoolean(value: boolean): boolean;
export function toBoolean(value: number): boolean;
export function toBounty(value: string): Bounty;
export function toClass(value: string): Class;
export function toClass(value: number): Class;
export function toCoinmaster(value: string): Coinmaster;
export function toEffect(value: string): Effect;
export function toEffect(value: number): Effect;
export function toEffect(value: Skill): Effect;
export function toElement(value: string): Element;
export function toFamiliar(value: string): Familiar;
export function toFamiliar(value: number): Familiar;
export function toFloat(value: string): number;
export function toFloat(value: boolean): number;
export function toFloat(value: number): number;
export function toFloat(value: number): number;
export function toInt(value: string): number;
export function toInt(value: boolean): number;
export function toInt(value: number): number;
export function toInt(value: number): number;
export function toInt(value: Item): number;
export function toInt(value: Familiar): number;
export function toInt(value: Skill): number;
export function toInt(value: Effect): number;
export function toInt(value: Class): number;
export function toInt(value: Monster): number;
export function toInt(value: Thrall): number;
export function toInt(value: Servant): number;
export function toInt(value: Vykea): number;
export function toItem(value: string): Item;
export function toItem(value: number): Item;
export function toItem(name: string, count: number): Item;
export function toJson(val: null): string;
export function toLocation(value: string): Location;
export function toLocation(value: number): Location;
export function toLowerCase(string: string): string;
export function toMonster(value: string): Monster;
export function toMonster(value: number): Monster;
export function toPhylum(value: string): Phylum;
export function toPlural(item: Item): string;
export function toServant(value: string): Servant;
export function toServant(value: number): Servant;
export function toSkill(value: string): Skill;
export function toSkill(value1: string, value2: string): Skill;
export function toSkill(value: number): Skill;
export function toSkill(value: Effect): Skill;
export function toSlot(item: string): Slot;
export function toSlot(item: Item): Slot;
export function toStat(value: string): Stat;
export function toString(val: string): string;
export function toString(val: number, fmt: string): string;
export function toString(val: number, fmt: string): string;
export function toThrall(value: string): Thrall;
export function toThrall(value: number): Thrall;
export function toUpperCase(string: string): string;
export function toUrl(value: Location): string;
export function toVykea(value: string): Vykea;
export function todayToString(): string;
export function totalFreeRests(): number;
export function totalTurnsPlayed(): number;
export function towerDoor(): boolean;
export function traceprint(string: string): void;
export function truncate(arg: number): number;
export function turnsPerCast(skill: Skill): number;
export function turnsPlayed(): number;
export function twiddle(): string;
export function unusualConstructDisc(): Item;
export function updateCandyPrices(): void;
export function urlDecode(arg: string): string;
export function urlEncode(arg: string): string;
export function use(item: Item): boolean;
export function use(arg1: Item, arg2: number): boolean;
export function use(arg1: number, arg2: Item): boolean;
export function useFamiliar(familiar: Familiar): boolean;
export function useServant(servant: Servant): boolean;
export function useSkill(arg1: Skill, arg2: number): boolean;
export function useSkill(arg1: number, arg2: Skill): boolean;
export function useSkill(arg1: Skill, arg2: number, target: string): boolean;
export function useSkill(arg1: number, arg2: Skill, target: string): boolean;
export function useSkill(skill: Skill): string;
export function userConfirm(message: string): boolean;
export function userConfirm(message: string, timeOut: number, defaultBoolean: boolean): boolean;
export function visit(master: Coinmaster): boolean;
export function visitUrl(): string;
export function visitUrl(string: string): string;
export function visitUrl(string: string, usePostMethod: boolean): string;
export function visitUrl(string: string, usePostMethod: boolean, encoded: boolean): string;
export function votingBoothInitiatives(clss: Class, path: number, daycount: number): { [key: string]: boolean };
export function votingBoothInitiatives(clss: number, path: number, daycount: number): { [key: string]: boolean };
export function wait(delay: number): void;
export function waitq(delay: number): void;
export function weaponHands(item: Item): number;
export function weaponType(item: Item): Stat;
export function weightAdjustment(): number;
export function whiteCitadelAvailable(): boolean;
export function whoClan(): { [key: string]: boolean };
export function willUsuallyDodge(): boolean;
export function willUsuallyMiss(): boolean;
export function write(string: string): void;
export function writeln(string: string): void;
export function xpath(html: string, xpath: string): string[];
declare abstract class MafiaClass {
    static get<T>(name: string | number): T;
    static get<T>(names: (string | number)[]): T[];
    static all<T>(): T[];
}
declare global {
    type BountyType = "bean-shaped rock" | "bloodstained briquette" | "brightly-colored bottlecap" | "broken petri dish" | "broken plunger handle" | "bundle of receipts" | "callused fingerbone" | "cherry stem" | "crumpled pink slip" | "drop of filthy ichor" | "empty greasepaint tube" | "half-empty bottle of eyedrops" | "handful of meatberries" | "important bat file" | "paper towel" | "pink bat eye" | "shredded can label" | "sugar button" | "suspicious mole" | "triffid bark" | "absence of moss" | "beard crumbs" | "bit of wilted lettuce" | "black eye" | "burned-out arcanodiode" | "dirty coal button" | "discarded pacifier" | "distintegrating cork" | "dusty wing" | "filthy rag" | "haunted pullstring" | "length of bent pipe" | "non-Euclidean hoof" | "rubber rib" | "rusty tap handle" | "spare abacus bead" | "spent handwarmer" | "warrrrrt" | "worthless piece of yellow glass" | "sticky stardust" | "empty rum bottle" | "frozen clipboard" | "glittery skate key" | "greasy string" | "grizzled stubble" | "hardened lava glob" | "hickory daiquiri" | "pickle chip" | "pile of country guano" | "pixellated ashes" | "pop art banana peel" | "purple butt" | "unlucky claw" | "vivisected hair" | "wig powder";
    class Bounty extends MafiaClass {
        static get<T = Bounty>(name: BountyType): T;
        static get<T = Bounty>(names: BountyType[]): T[];
        static all<T = Bounty>(): T[];
        /**
         * Plural */
        readonly plural: string;
        /**
         * Type */
        readonly type: string;
        /**
         * Kol internal type */
        readonly kol_internal_type: string;
        /**
         * Number */
        readonly number: number;
        /**
         * Image */
        readonly image: string;
        /**
         * Monster */
        readonly monster: Monster;
        /**
         * Location */
        readonly location: Location;
    }
    type ClassType = string;
    class Class extends MafiaClass {
        static get<T = Class>(name: ClassType): T;
        static get<T = Class>(names: ClassType[]): T[];
        static all<T = Class>(): T[];
        /**
         * Primestat */
        readonly primestat: Stat;
    }
    type CoinmasterType = "Dimemaster" | "Quartersmaster" | "Bounty Hunter Hunter" | "Big Brother" | "Crimbo Cartel" | "Arcade Ticket Counter" | "Altar of Bones" | "CRIMBCO Gift Shop" | "Game Shoppe" | "Game Shoppe Snacks" | "A. W. O. L. Quartermaster" | "Isotope Smithery" | "Dollhawker's Emporium" | "Lunar Lunch-o-Mat" | "The Trapper" | "Vending Machine" | "Fudge Wand" | "Crimbo 2011" | "The Swagger Shop" | "Topiary Nuggletcrafting" | "Bugbear Token" | "FDKOL Tent" | "The Terrified Eagle Inn" | "The Shore, Inc. Gift Shop" | "Warbear Black Box" | "Paul's Boutique" | "The Frozen Brogurt Stand" | "Taco Dan's Taco Stand" | "Buff Jimmy's Souvenir Shop" | "The Neandermall" | "Legitimate Shoe Repair, Inc." | "The Applecalypse Store" | "Ni&ntilde;a Store" | "Ye Newe Souvenir Shoppe" | "Freshwater Fishbonery" | "The SHAWARMA Initiative" | "The Canteen" | "The Armory" | "Crimbo 2014" | "Everything Under the World" | "The Dinsey Company Store" | "Toxic Chemistry" | "Disco GiftCo" | "Wal-Mart" | "Bat-Fabricator" | "ChemiCorp" | "Gotpork P. D." | "Gotpork Orphanage" | "LT&T Gift Shop" | "Internet Meme Shop" | "Precinct Materiel Division" | "A traveling Thanksgiving salesman" | "The Black Market" | "Spacegate Fabrication Facility" | "Cheer-o-Vend 3000" | "The Pok&eacute;mporium" | "FantasyRealm Rubee&trade; Store" | "G-Mart" | "PirateRealm Fun-a-Log" | "Your Campfire" | "Cosmic Ray's Bazaar" | "Mushroom District Item Shop" | "Mushroom District Gear Shop" | "Drip Institute Armory" | "Guzzlr Company Store Website" | "Your SpinMaster&trade; lathe";
    class Coinmaster extends MafiaClass {
        static get<T = Coinmaster>(name: CoinmasterType): T;
        static get<T = Coinmaster>(names: CoinmasterType[]): T[];
        static all<T = Coinmaster>(): T[];
        /**
         * Token */
        readonly token: string;
        /**
         * Item */
        readonly item: Item;
        /**
         * Property */
        readonly property: string;
        /**
         * Available tokens */
        readonly available_tokens: number;
        /**
         * Buys */
        readonly buys: boolean;
        /**
         * Sells */
        readonly sells: boolean;
        /**
         * Nickname */
        readonly nickname: string;
    }
    type EffectType = number | "Light!" | "Sleepy" | "Confused" | "Embarrassed" | "Far Out" | "Wings" | "Beaten Up" | "Hardly Poisoned at All" | "Knob Goblin Perfume" | "Steroid Boost" | "Knob Goblin Lust Frenzy" | "Sharp Weapon" | "Hennaliciousness" | "Bloody Hand" | "Leash of Linguini" | "Sugar Rush" | "Ghostly Shell" | "Reptilian Fortitude" | "Uncertain" | "Seal Clubbing Frenzy" | "Patience of the Tortoise" | "Pasta Oneness" | "Saucemastery" | "Disco State of Mind" | "Mariachi Mood" | "Temporary Lycanthropy" | "Butt-Rock Hair" | "Contemptible Emanations" | "Incredibly Hulking" | "Superhuman Sarcasm" | "Tomato Power" | "Phorcefullness" | "Pronounced Potency" | "Concentration" | "Mystically Oiled" | "Expert Oiliness" | "Gr8ness" | "Hernia!" | "Red Neck" | "Chapped Legs" | "Sunburned" | "Wussiness" | "Draggin' Balls" | "1337p4n7Z" | "Spiky Hair" | "Complete Delusion" | "The Smile of Mr. A." | "Macho Profundo" | "Empathy" | "Tenacity of the Snapper" | "Astral Shell" | "Elemental Saucesphere" | "Jalape&ntilde;o Saucesphere" | "Jaba&ntilde;ero Saucesphere" | "Extreme Muscle Relaxation" | "Rainy Soul Miasma" | "Teleportitis" | "Wanged" | "Aloysius' Antiphon of Aptitude" | "The Moxious Madrigal" | "Cletus's Canticle of Celerity" | "Polka of Plenty" | "The Magical Mojomuscular Melody" | "Power Ballad of the Arrowsmith" | "Brawnee's Anthem of Absorption" | "Fat Leon's Phat Loot Lyric" | "Psalm of Pointiness" | "Jackasses' Symphony of Destruction" | "Stevedave's Shanty of Superiority" | "Ode to Booze" | "Sleeping with the Fishes" | "Ticking Clock" | "Fresh Scent" | "Hippy Stench" | "Wreathed in Merriment" | "Fury of the Bells" | "Yuletide Sappiness" | "Missing Fingers" | "Gnawed-Off Arm" | "Broken Knees" | "And Your Family, Too" | "Chokeheld" | "Missing Eyebrows" | "Two Left Feet" | "Bat-Intimidated" | "Tingly Wrists" | "Tingly Elbows" | "Tingly Biceps" | "Sticky Hands" | "Clean-Shaven" | "Aspect of the GravyPlum Fairy" | "Rushin' Hands" | "Reedy Pipes" | "Oriental Mysticism" | "Arabian Knighthood" | "Stabilizing Oiliness" | "Slippery Oiliness" | "Strength of Ten Ettins" | "Strange Mental Acuity" | "Izchak's Blessing" | "Corroded Weapon" | "Canadianity" | "Enraged" | "Ancestral Disapproval" | "Whitened Teeth" | "Hopped Up on Goofballs" | "Goofball Withdrawal" | "Antsy in your Pantsy" | "Popping Stomach" | "Dwarven Hardiness" | "Apathy" | "Radio Head" | "Free Bird" | "Shiny Happy Weapon" | "On the Shoulders of Giants" | "Shot in the Arse" | "Cock of the Walk" | "Eggs-tra Sensory Perception" | "Egg-stortionary Tactics" | "Egg-stra Arm" | "Egg-headedness" | "Egg-cellent Vocabulary" | "Gothy" | "Flower Power" | "Eye of the Lihc" | "Springy Fusilli" | "Rage of the Reindeer" | "Engorged Weapon" | "Mysteriously Handsome" | "Tamarind Torment" | "Spicy Limeness" | "Mystic Pickleness" | "Spicy Mouth" | "Hombre Muerto Caminando" | "Purple Tongue" | "Green Tongue" | "Orange Tongue" | "Red Tongue" | "Blue Tongue" | "Black Tongue" | "Object Detection" | "Twinklebritches" | "Flame-Retardant Trousers" | "Insulated Trousers" | "Spookypants" | "Smelly Pants" | "Sleaze-Resistant Trousers" | "Twinkly Weapon" | "Flaming Weapon" | "Frigid Weapon" | "Spooky Weapon" | "Stinky Weapon" | "Sleazy Weapon" | "The Sonata of Sneakiness" | "Carlweather's Cantata of Confrontation" | "Ur-Kel's Aria of Annoyance" | "Smooth Movements" | "Musk of the Moose" | "Spirit of Cayenne" | "Spirit of Peppermint" | "Spirit of Garlic" | "Spirit of Wormwood" | "Spirit of Bacon Grease" | "Yellow Tongue" | "Big Veiny Brain" | "Peeled Eyeballs" | "Wasabi Sinuses" | "Heavy Petting" | "Bootyliciousness" | "Make Meat FA$T!" | "Temporary Blindness" | "Jazz Hands" | "Half-Astral" | "Cupcake of Choice" | "Shiny Happy Cupcake" | "Tiny Bubbles in the Cupcake" | "Your Cupcake Senses Are Tingling" | "The Cupcake of Wrath" | "Hotform" | "Coldform" | "Spookyform" | "Stenchform" | "Sleazeform" | "Hot Breath" | "Cold Breath" | "Spooky Breath" | "Stinky Breath" | "Sleazy Breath" | "Aspect of the Twinklefairy" | "Hot Blooded" | "Cold Blooded" | "Spooky Demeanor" | "Stenchtastic" | "Supafly" | "Provocative Perkiness" | "Ermine Eyes" | "Eau D'enmity" | "Ocelot Eyes" | "Ponderous Potency" | "Concentrated Concentration" | "Got Milk" | "Papowerful" | "Frog In Your Throat" | "Salamander In Your Stomach" | "Newt Gets In Your Eyes" | "Blessed by the RNG" | "Cursed by The RNG" | "Amorous" | "Bubble, Bubble" | "Sticky Fingers" | "Chalky Hand" | "Snarl of the Timberwolf" | "Dreams and Lights" | "Scarysauce" | "Dirge of Dreadfulness" | "Talking Like a Pirate" | "The 'Tussin" | "Pie in the Face" | "Hip to Be Square Dancin'" | "Livin' Large" | "Wistfully Nostalgic" | "Happy Salamander" | "Techno Bliss" | "Material Witness" | "No Worries" | "Metal Speed" | "Radium Radicality" | "Wintergreen Warmongery" | "Also Schmeckt Zarathustra" | "Vitamin-Maxed" | "Got Your Boots On" | "The Q Is Talking To You" | "Bad Luck" | "Deadly Flashing Blade" | "Locks Like the Raven" | "Smugness" | "Good Karma" | "Pumped Up" | "Head on Fire, Ass Catching" | "Violent Night" | "White Knuckles" | "Don't Rest Ye, Bold Adventurer" | "Frosty the Hitman" | "Coy to the Hurled" | "Crimbo Epiphany" | "Bells in the Batfry" | "Carol of the Bones" | "Get Me Off This Crazy Thing!" | "Very Clean Teeth" | "Arse-a'fire" | "Lemon Enlightenment" | "Squirming Like a Toad" | "Eau de Tortue" | "Majorly Poisoned" | "Tenuous Grip on Reality" | "Turned Into a Skeleton" | "Barking Dogs" | "Prestidigysfunction" | "Heart of White" | "Heart of Pink" | "Heart of Orange" | "Heart of Lavender" | "Heart of Yellow" | "Heart of Green" | "Ultrahydrated" | "Disco Inferno" | "Disco Nirvana" | "Disco Concentration" | "Full of Vinegar" | "Kiss of the Black Fairy" | "Tangled Up" | "A Little Bit Poisoned" | "Somewhat Poisoned" | "Really Quite Poisoned" | "Filthworm Larva Stench" | "Filthworm Drone Stench" | "Filthworm Guard Stench" | "Light-Headed" | "Bananas!" | "What's That Smell?" | "Mad at Science" | "Tetanus" | "Half-Eaten Brain" | "Fearless" | "Socialismydia" | "Axe Wound" | "Temporary Amnesia" | "Grilled" | "&quot;The Disease&quot;" | "Infinite Loop" | "Cunctatitis" | "Mild Lycanthropy" | "Lycanthropy, Eh?" | "'Roids of the Rhinoceros" | "Happy Trails" | "Piratastic" | "Healthy Green Glow" | "Sinuses For Miles" | "One Very Clear Eye" | "Pop-eyed" | "Flamingly Floral" | "Permafrosty" | "Bloody Bloody Bloody!" | "Chauve-Souris Merde Fou" | "Cuts Like a Buttered Knife" | "Impregnably Delicious" | "Fireproof Lips" | "Fever From the Flavor" | "Hyphemariffic" | "Can't Smell Nothin'" | "Hyperoffended" | "Burning Hands" | "Burning Ears" | "Burning Soul" | "Frozen Hands" | "Frozen Shoulders" | "Soul Freeze" | "Broken Fast" | "Hoity Toity" | "On the Trail" | "Moon'd" | "Dilated Pupils" | "Optimist Primal" | "Elvish" | "Winklered" | "White-boy Angst" | "Fustulent" | "Tin, Man" | "Can't Be a Chooser" | "Ass Over Teakettle" | "Bestial Sympathy" | "La Bamba" | "Blessing of Pikachutlotal" | "Blessing of Charcoatl" | "Blessing of Squirtlcthulli" | "Blessing of Bulbazinalli" | "All Fired Up" | "Go Get 'Em, Tiger!" | "Starry-Eyed" | "Comic Violence" | "Tranquilized Mind" | "Woad Warrior" | "Red Door Syndrome" | "Spirit of Alph" | "Night Vision" | "Absinthe-Minded" | "Rat-Faced" | "Dancing Prowess" | "No Vertigo" | "Good with the Ladies" | "Bats in the Belfry" | "Unusual Fashion Sense" | "Feelin' Philosophical" | "Moon June Spooned" | "Inspired!" | "Ringing Ears" | "Man's Worst Enemy" | "Extremely Poor Taste" | "The Real Deal" | "Memento Moir&eacute;" | "Flashing Eyes" | "Mmmmmelon" | "Contagious Bad Luck" | "Sparkling Consciousness" | "Sneaky Serpentine Subtlety" | "Adrenaline Rush" | "Crusty Head" | "Florid Cheeks" | "Seeing Colors" | "Football Eyes" | "Erudite" | "Radiating Black Body&trade;" | "Missing Kidney" | "Duhhh" | "Affronted Decency" | "Maid Disservice" | "Minioned" | "Enhanced Archaeologist" | "Chronologically Pummeled" | "Animal Exploiter" | "Scent of a Kitchen Elf" | "Once Bitten, Twice Shy" | "The Rage" | "Shamed &amp; Manipulated" | "Drummed Out" | "Dreadlocked" | "Hornswaggled" | "Third Eye Blind" | "The Vitus Virus" | "Your #1 Problem" | "Braaains" | "Braaaaaains" | "Re-Possessed" | "Burning Heart" | "Frostbitten" | "Freaked Out" | "Guanified" | "Basted" | "Raving Lunatic" | "Solar Flair" | "Hyperbolic Hypothermia" | "Slimed" | "Tar-Struck" | "Greased" | "Batigue" | "Cupshotten" | "Deep-Fried" | "Paw swap" | "Side Affectation" | "Shirtless in Seattle" | "Scared Stiff" | "Midgetized" | "Synthesized" | "Hiding in Plain Sight" | "Compensatory Cruelness" | "Mutated" | "Seriously Mutated" | "Flared Nostrils" | "Easily Embarrassed" | "All Covered In Whatsit" | "Beer in Your Shoes" | "Toad In The Hole" | "Strangulated" | "Ham-Fisted" | "Baconstoned" | "Je Ne Sais Porquoise" | "Fit To Be Tide" | "Preternatural Greed" | "Big Flaming Whip" | "Demonic Taint" | "Dang Near Cut In Half" | "Hella Tough" | "Hella Smart" | "Hella Smooth" | "Omphaloskepsis" | "Charrrming" | "Muscularrr" | "Carrrsmic" | "A Revolution in Your Mouth" | "Gelded" | "Super-Charged" | "Super-Mega-Charged" | "Super-Mega-Ultra-Charged" | "Super-Mega-Ultra-Hyper-Charged" | "Brother Flying Burrito's Blessing" | "Brother Corsican's Blessing" | "Brother Smothers's Blessing" | "Well-Swabbed Ear" | "Well-Oiled" | "Truly Gritty" | "Soul-Crushing Headache" | "Savage Beast Inside" | "Curse of the Black Pearl Onion" | "Fishy Fortification" | "Cybernetic Muscles" | "Neuromancy" | "Can Has Cyborger" | "Curse Magnet" | "Heart of Black" | "Tinnitus" | "Om Nom Nom" | "Fastbreaker" | "Afternoon Insight" | "Fancy Feasted" | "Chock Full o' Nanites" | "The Spirit of Crimbo" | "Mallowed Out" | "Fitter, Happier" | "Eye of the Seal" | "Souper Vengeful" | "El Tango de la Maldita Suegra" | "Innuendo Shopping" | "Well-preserved" | "El Vibrations" | "Inscrutable exoskeleton" | "Heavily Breathing" | "Marco Polarity" | "Full-Body Tan" | "Feet of Watermelon" | "Feet of Grapefruit" | "Feet of Strawberry" | "Less Vincible" | "In Tuna" | "Nerf'd" | "Stuck-Up Hair" | "O Hai!" | "Healthy Bronze Glow" | "Chalky White Pallor" | "Trepandation" | "Educated (Kinda)" | "Educated (Sorta)" | "It Didn't Kill You" | "The Sweats" | "Hooked Up" | "Form of...Cockroach!" | "Shape of...Mole!" | "Form of...Bird!" | "Cravin' for a Ravin'" | "Arcane in the Brain" | "Weather, Man" | "Bureaucratized" | "Liquid Courage" | "Extra Terrestrial" | "Digitally Converted" | "Radiant Personality" | "Alchemical, Brother" | "Ack!  Barred!" | "New, Improved" | "Extra Sensory Perception" | "Unpopular" | "Phoenix, Right?" | "Antarctic Memories" | "Carrion' On" | "Melancholy Burden" | "The Great Tit's Blessing" | "The Ballad of Richie Thingfinder" | "Benetton's Medley of Diversity" | "Elron's Explosive Etude" | "Chorale of Companionship" | "Prelude of Precision" | "Deadly Lampblade" | "Drenched With Filth" | "Hobonic" | "Crotchety, Pining" | "Barking Mad" | "Artificially Sweet" | "Rainbow Bright" | "Fire Down Below" | "Tundra Mouth" | "Cholestoriffic" | "Refuse Reflux" | "Scariberi" | "Less Pervious" | "Haiku State of Mind" | "Fishy" | "Cranberry Cordiality" | "Blackberry Politeness" | "The Halls of Muscularity" | "The Halls of Mysticality" | "The Halls of Moxiousness" | "Glittering Eyelashes" | "Warm Belly" | "Fishbreath" | "Salty Dogs" | "Chain Chain Chains" | "It's Electric!" | "Crocodile Tear" | "Swimming with Sharks" | "Brined Liver" | "Down With Chow" | "Low on the Hog" | "Festive Radiation" | "Sweet and Yellow" | "Sweet and Green" | "Sweet and Red" | "Juiced Up" | "Greased-Up Familiar" | "Yuletide Mutations" | "Amorphous Cheer" | "In Vino Vires" | "Yuletide Industry" | "The Colors..." | "Jammin'" | "Drunk With Power" | "Cruisin' for a Bruisin'" | "Crimbo Nostalgia" | "Quivering with Rage" | "Apoplectic with Rage" | "Dizzy with Rage" | "Puissant Pressure" | "Perspicacious Pressure" | "Pulchritudinous Pressure" | "Perceptive Pressure" | "Proficient Pressure" | "A Little Bit Evil" | "Snobby" | "Smokin'" | "Salty Mouth" | "Broken Heart" | "Fiery Heart" | "Cold Hearted" | "Sweet Heart" | "Withered Heart" | "Lustful Heart" | "Clumsy" | "Spectral" | "Donho's Bubbly Ballad" | "Antihangover" | "Old School Pompadour" | "Cotton Mouthed" | "Colorfully Concealed" | "Emotion Sickness" | "Biologically Shocked" | "Corruption of Wretched Wally" | "Really Deep Breath" | "Scrappy, Shadowy" | "Grulched" | "Billiards Belligerence" | "Mental A-cue-ity" | "Hustlin'" | "Chalked Weapon" | "Sizzling with Fury" | "Cold Hard Skin" | "Lubed" | "Coated in Slime" | "Oxygenated Blood" | "Memory of Strength" | "Memory of Smarts" | "Memory of Attractiveness" | "Memory of Speed" | "Memory of Aggressiveness" | "Memory of Resilience" | "Grimace" | "Bilious" | "Slimebreath" | "Serenity" | "Phairly Pheromonal" | "Nano-juiced" | "Dance Interpreter" | "Meatwise" | "In the Saucestream" | "Stimulated Brain" | "Stimulated Body" | "Bitterskin" | "Mighty Shout" | "Pasty" | "Cake Caked" | "Shamboozled" | "Pumped Stomach" | "Pneumatic" | "Badger Underfoot" | "Weasels Underfoot" | "Chihuahua Underfoot" | "5 Pounds Lighter" | "Minty Freshness" | "A Contender" | "Cuts Like a Lightly-Buttered Knife" | "Slimed Stomach" | "Chilblains of the Corn" | "Finstrong" | "Busker Do" | "Familial Ties" | "Swimming Head" | "Existential Torment" | "Spangled Star" | "Inky Camouflage" | "Fishily Speeding" | "Slimeform" | "Slimily Strong" | "Slimily Sagacious" | "Slimily Speedy" | "Bilious Brawn" | "Bilious Brains" | "Bilious Briskness" | "Mucilaginous Muscle" | "Mucilaginous Mentalism" | "Mucilaginous Moxiousness" | "Ichorous Intensity" | "Ichorous Eyesight" | "Sappy Blood" | "Rave Concentration" | "Rave Nirvana" | "Belch the Rainbow&trade;" | "Full of Wist" | "Polka Face" | "Bruised Jaw" | "A Few Extra Pounds" | "Jingle Jangle Jingle" | "Cringle's Curative Carol" | "Holiday Bliss" | "Sugar High" | "Sugar Smacks" | "Sugary Tongue" | "First Eye Blind" | "Peppermint Bite" | "Busy Bein' Delicious" | "Sweet, Nuts" | "Iron Palms" | "Curiosity of Br'er Tarrypin" | "Cold-Blooded Warm Fuzzies" | "Having a Ball!" | "Simply Invisible" | "Simply Irresistible" | "Simply Irritable" | "Inigo's Incantation of Inspiration" | "Red Misty-Eyed" | "B-b-brr!" | "Sealed Brain" | "Pyramid Power" | "Earworm" | "Very Clean Guns" | "Gleaming White Teeth" | "Pemmican't" | "Down the Rabbit Hole" | "Assaulted with Pepper" | "Three Days Slow" | "Cat-Alyzed" | "Anytwo Five Elevenis?" | "Coated Arms" | "Smoky Third Eye" | "Full Bottle in front of Me" | "Thick-Skinned" | "20-20 Second Sight" | "Slimy Hands" | "Bottle in front of Me" | "Fan-Cooled" | "Ginger Snapped" | "Egg on your Face" | "Pockets of Fire" | "Weapon of Mass Destruction" | "Orchid Blood" | "Dances with Tweedles" | "Patched In" | "You Can Really Taste the Dormouse" | "Turtle Titters" | "Cat Class, Cat Style" | "Surreally Buff" | "Quadrilled" | "Coming Up Roses" | "Oleaginous Soles" | "Grrrrrrreat!" | "Powdered" | "Oh Snap" | "Towering Strength" | "Mitre Cut" | "Knightlife" | "The Royal We" | "Discomfited" | "Literally Insane" | "Smooth Legs" | "Stubbly Legs" | "Hurricane Force" | "Broken Dancing" | "Clyde's Blessing" | "In Your Cups" | "Cinco Elementos" | "Pwnd" | "Gaze of the Volcano God" | "Gaze of the Lightning God" | "Gaze of the Trickster God" | "Electrolyte Fantastic" | "2 Hearts, 1 Mind" | "Deadened Palate" | "Oversaturated Palate" | "Duct Out of Water" | "Super Skill" | "Super Structure" | "Super Vision" | "Super Speed" | "Super Accuracy" | "Burning, Man" | "Pie in the Sky" | "Sole Soul" | "Over the Ocean" | "The HeyDezebound Heart" | "Candied Skeleton" | "Bone Homie" | "Juiced and Jacked" | "Everything Looks Yellow" | "Everything Looks Blue" | "Everything Looks Red" | "The Pleasures of the Flesh" | "Best effect ever" | "Unmotivated" | "Mystic Circle" | "Triangle, Man" | "Square to be Hip" | "Employee of the Month" | "Chocolate Reign" | "Pork Power" | "Incensed" | "Sausage Festive" | "Stands Alone" | "Loco Motives" | "Kung Fu Fighting" | "Fast as Lightning" | "A Little Bit Frightening" | "Expert Timing" | "So You Can Work More..." | "Abominably Slippery" | "Wasabi With You" | "Pisces in the Skyces" | "Ninja, Please" | "Muscle Unbound" | "Thaumodynamic" | "So Fresh and So Clean" | "Single-Eyed Vision" | "There is No Spoon" | "Eso S&iacute; Que Es" | "On Pins and Needles" | "Aided and Abetted" | "Wet Willied" | "Taste the Inferno" | "Okee-Dokee Go!" | "Okee-Dokee Computer" | "Okee-Dokee, Smokee" | "The Solution" | "Army of One" | "Float Like a Butterfly, Smell Like a Bee" | "Transpondent" | "Spell Transfer Complete" | "Overstimulated" | "Simulation Stimulation" | "Heal Thy Nanoself" | "Wintry Breath" | "Stuck That Way" | "Corrupted" | "Timer 1" | "Timer 2" | "Timer 3" | "Timer 4" | "Timer 5" | "Timer 6" | "Timer 7" | "Timer 8" | "Timer 9" | "Timer 10" | "Beastly Flavor" | "Oily Flavor" | "Spooky Flavor" | "Greasy Flavor" | "Buggy Flavor" | "Hippy Flavor" | "Fratty Flavor" | "Demonic Flavor" | "Indescribable Flavor" | "SuperStar" | "Gobliny Flavor" | "Piratey Flavor" | "Chlorophyll Flavor" | "Weird Flavor" | "Crimbo Flavor" | "Mer-kinny Flavor" | "Slimy Flavor" | "Penguinny Flavor" | "Elemental Flavor" | "Cosmic Flavor" | "Hobo Flavor" | "Retrograde Relaxation" | "Salamanderenity" | "Earthen Fist" | "Fondid" | "Bright!" | "Refined Palate" | "Hammered" | "Some Cheese with Your Wine" | "L'instinct F&eacute;lin" | "Filled with Magic" | "Danish Cunning" | "Feline Ferocity" | "Yes, Can Haz" | "Gar-ish" | "Hammertime" | "Purity of Spirit" | "Cold, Dead Hands" | "Cool, Catlike" | "The Captain's Hammer" | "X-Ray Vision" | "Litterboxing" | "Raging Animal" | "Stickler for Promptness" | "Bastard!" | "Natural 20" | "Natural 1" | "20/20 Vision" | "Mistified" | "Bat Attitude" | "There Wolf" | "Pride of the Vampire" | "Prince of Seaside Town" | "Haunting Looks" | "Dead Sexy" | "Vampin'" | "Yiffable You" | "The Bone Us Round" | "Booing Radly" | "Braaaains Over Braaaawwn" | "Bloody-minded" | "Wolf's Bane" | "Sticks and Stones" | "Perfect Hair" | "Let's Go Shopping!" | "Boner Battalion" | "Nightstalkin'" | "You Can Taste the Darkness" | "The Chains Down In The Belly-O" | "Lobos Fresh" | "Chalk Outline" | "Peppermint Twisted" | "Rootin' Around" | "Strawberry Alarm" | "Dirty Pear" | "Koyaaniskumquatsi" | "In the Limelight" | "Stop and Smell the Fudge" | "Dis Abled" | "Fudgehound" | "Healthy, Elfy, and Wise" | "Rad-ish" | "Jerky, Boy" | "Castaway Physique" | "Fudge Headache" | "Gummiheart" | "Gummibrain" | "Gummiskin" | "Gonna Get You, Sucker" | "Bubble Vision" | "Buy!  Sell!  Buy!  Sell!" | "All Wound Up" | "Greedy Resolve" | "Joyful Resolve" | "Strong Resolve" | "Brilliant Resolve" | "Irresistible Resolve" | "Destructive Resolve" | "Kindly Resolve" | "Fortunate Resolve" | "You Know What's Up" | "You Know When to Walk Away" | "You Know Who to Call" | "You Know Where to Go" | "Trivia Master" | "Cinnamouth" | "Gamer Rage" | "Buff as a Baobab" | "Limber as Mortimer" | "Pharmaceutically Cool" | "Everything's Zen" | "Inebriate Pride" | "Amorous Avarice" | "Covetous Robbery" | "Voracious Gorging" | "Sated and Furious" | "Vanity Rage" | "Just the Best Anapests" | "You're In Trouble" | "Song of the Glorious Lunch" | "Song of Accompaniment" | "Song of Solitude" | "Song of Fortune" | "Song of Battle" | "Song of Cockiness" | "Overconfident" | "Foe-Splattered" | "Rampage!" | "Mortarfied" | "Creepypasted" | "World's Shortest Giant" | "Cockroach Scurry" | "Transcendental Wind" | "Orc Chops" | "Heart Aflame" | "Void Between the Stars" | "Gutterminded" | "Arresistible" | "Heisenberglary" | "In the Slimelight" | "Elemental Mastery" | "Mo' Hobo" | "Hidden Power" | "Stone-Faced" | "Lapdog" | "Silent Running" | "Water Wings" | "N-Spatial vision" | "Extra-Wet" | "Hotcaked" | "Frigidalmatian" | "The Fire Inside" | "Long Live GORF" | "Standard Issue Bravery" | "QWOPped Up" | "Chow Downed" | "Waking the Dead" | "Scavengers Scavenging" | "Meat Shielded" | "Zomg WTF" | "Disquiet Riot" | "The Applause That Refreshes" | "Taking the Plunge" | "Fly for a White Guy" | "Gearhead Gear" | "Gnollivision" | "Dress to Kill" | "Better Off Bread" | "Beginning at Home" | "Boned Up" | "Batted Around" | "Goat Gotten" | "Three King-sized Sheets to the Wind" | "Ski Ballin'" | "Polyphonic Yawn" | "Tango, O Gnat" | "Weirdly Scientific" | "No Squealer Healer" | "Visibly Goth" | "Spike-and-span" | "Putting the Orc in Porcine" | "Lord of Acid" | "Flayer Flavor" | "The Kobold and the Kobeautiful" | "Rattlin' Head" | "Sharin' Stone" | "Warlock Fairy Wizard Sorcerer" | "Matador Nemesis" | "Green, Uneasy" | "The Eyes Have It" | "Ham(ster)-Handed" | "The Great White Mope" | "Clean to the Bone" | "Chef Brains-are-dee" | "Osseous George" | "Something's Amistress" | "Bony Dancer" | "Short on Options" | "Short of Breath" | "Like an Egyptian" | "Bandananit" | "On the Homeo Path" | "First, Like, Do No Harm?" | "Robbin' Like a Goblin" | "Super Calloused Agile Mystic" | "Kitty Littered" | "Stark Raven Mad" | "Mister Master" | "Pros Only" | "Grillin' Like a Villain" | "Well Excuuuuse Me!" | "Inocente, In a Sense" | "Dug Out" | "Bedraggled Dragoon" | "Shocking Biology" | "Pug Ugly" | "Jay Walking" | "RIP AND TEAR" | "Dawn of the Goblin" | "To Protect and Servo" | "Gnomedome" | "You're a Brick . . . Ooze" | "Walking Carpet" | "Jinkies!" | "Square Jaw And Everything Else" | "Clerical Aura" | "Ravonovichy" | "Ermahgerd, Burke" | "Feeling a Little Wesley" | "Altered Wavelengths" | "Stopping to Smell the Flowers" | "Eyes Wide Propped" | "Skeletal Warrior" | "Skeletal Cleric" | "Skeletal Wizard" | "Skeletal Rogue" | "Skeletal Buddy" | "Aykrophobia" | "Bonelording" | "Nanobrawny" | "Nanobrainy" | "Nanoballsy" | "Tea-hee" | "Squid Squint" | "Vinegavotte" | "Block-Rockin' Beet" | "Kernel Panic!" | "I Am the Slaw!" | "Using Protection" | "Well-Lubed" | "Hairy Palms" | "The Glistening" | "Neutered Nostrils" | "Your Interest is Peaked" | "Ginger Fightis" | "Consumed by Anger" | "Consumed by Fear" | "Consumed by Doubt" | "Consumed by Regret" | "Sheepskinned" | "Magic Tongue" | "Ooh, Sweet!" | "Ooh, Salty!" | "Ooh, Bitter!" | "Ooh, Sour!" | "Ooh, Umami!" | "Puzzle Fury" | "Hagg-ard" | "Highland Sheen" | "Meaty and Cheesy" | "Margaritish" | "Churro Chiaroscuro" | "Tiffany's Breakfast" | "My Breakfast With Andrea" | "The Champion's Breakfast" | "Breakfast Clubbed" | "ChibiChanged&trade;" | "Lucky Cat Is Lucky" | "Pla-see-bo" | "Hoppyness" | "A Taste of Rainbow" | "Crud&eacute;" | "Coffeesphere" | "Oilsphere" | "Gristlesphere" | "Chocolatesphere" | "8-bit Apparition" | "Goblin in Black" | "Censored Can" | "Groast Out" | "Happy-go-meaty" | "Nihao You Doin'?" | "HELLO WORLD!" | "Daemon Duds" | "Ninjas Just Tryin' to Get Paid" | "Guild by Association" | "Healthy Red Glow" | "Healthy Blue Glow" | "Protection from Bad Stuff" | "Puddingskin" | "Walberg's Dim Bulb" | "Singer's Faithful Ocelot" | "Drescher's Annoying Noise" | "Oiled-Up" | "Squatting and Thrusting" | "You Read The Manual" | "From Nantucket" | "Nothing Is Impossible" | "Trash-Wrapped" | "Pretending to Pretend" | "Superveiny 9000" | "Always In Motion" | "Celestial Sheen" | "Celestial Vision" | "Celestial Saltiness" | "Celestial Camouflage" | "Hairless and Airless" | "Eyes of the Dragon" | "Net Gain" | "Blade Rolling" | "Stinking Cloud" | "Waxing Mystical" | "Deep-Tainted Mind" | "Red Around the Gills" | "Deep-Seated Rage" | "Juiced Out" | "Juiced Newton" | "Juiced" | "Gutballed" | "Nettled" | "Skunkulated" | "Skulla, Brah" | "Stumpy" | "Visions of the Deep Dark Deeps" | "Sour Softshoe" | "Closer to Fine" | "Soda Jerked" | "Blue Swayed" | "Orange Crusher" | "Purple Reign" | "Cinnamon Challenger" | "Phairly Balanced" | "Jelly Combed" | "Salt Rockin'" | "Electrolit Up" | "Twenty-three Squid, Ew" | "Chief Executive Optimism" | "Thick, Sick" | "Thicker, Sicker" | "Thickest, Sickest" | "Horrid, Torrid" | "Shredding, Sweating" | "Ripping, Dripping" | "Weepy, Creepy" | "Tearful, Fearful" | "Crying, Dying" | "Hot Sweat" | "Cold Sweat" | "Rank Sweat" | "Black Sweat" | "Flop Sweat" | "Mark of Candy Cain" | "Cereal Killer" | "Jiggu... What?" | "More Like a Suckrament" | "A Hole in the World" | "Cut But Not Dried" | "Everything Must Go!" | "Predjudicetidigitation" | "Things Man Was Not Meant to Eat" | "Bored Stiff" | "Dragged Through the Coals" | "Nature's Bounty" | "Sewer-Drenched" | "Fifty Ways to Bereave Your Lover" | "Staying Frosty" | "Magically Fingered" | "Spore-Wreathed" | "Brass Loins" | "Silver Age Secrets" | "The Tunger&trade;" | "Touched by a Ghost" | "Chilled to the Bone" | "Nauseated" | "Elbow Sauce" | "Wet Rub" | "Saucefingers" | "Saucegoggles" | "Shoesauce" | "Corona de la Salsa" | "Frio Como Helado" | "Concha de Tortuga" | "Riqueza de Pasta" | "Cafeter&iacute;a Brujer&iacute;a" | "Carne Obsesionada" | "Bailando, Fernando" | "Macho, Macho Dog" | "Inner Dog" | "Top Dog" | "Devil Inside" | "Chill Out, Dog" | "Scaredy Dog" | "Dog Breath" | "Hangdog" | "Video Game Hot Dog" | "Here to Kick Ass" | "Video... Games?" | "First Blood Kiwi" | "Shepherd's Breath" | "Curse of Hollowness" | "Curse of Vulnerability" | "Curse of Exposure" | "Curse of Impotence" | "Curse of Dullness" | "Curse of Weakness" | "Curse of Sluggishness" | "Curse of Forgetfulness" | "Curse of Misfortune" | "Curse of Clumsiness" | "Curse of Loneliness" | "Electric, Kool" | "You've Got a Stew Going!" | "Whitesloshed" | "Blood Porter" | "Ghost Finger" | "Dreadful Heat" | "Dreadful Chill" | "Dreadful Fear" | "Dreadful Smell" | "Dreadful Sheen" | "Song of the North" | "Song of Slowness" | "Song of Starch" | "Song of Sauce" | "Song of Bravado" | "Hot Hands" | "Cold Hands" | "Spooky Hands" | "Stinky Hands" | "Sleazy Hands" | "Poetically Licensed" | "Isskay like an Ashtray" | "School Spirited" | "Jamming with the Jocks" | "Nerd is the Word" | "Greaser Lightnin'" | "Ogred and Oublietted" | "Slicked-Back Do" | "Armor-Plated" | "Uncaged Power" | "Truthful" | "Slightly Larger Than Usual" | "Mayeaugh" | "Once-Cursed" | "Twice-Cursed" | "Thrice-Cursed" | "Wax On Your Shoes" | "All Glory To the Toad" | "Blood-Rich" | "Pill Party!" | "Pygmy Drinking Buddy" | "Full of Fruit, Yourself" | "Strong Spirit" | "Wise Spirit" | "Frisky Spirit" | "Inappropriate Spirit" | "Fiery Spirit" | "Cool Spirit" | "Resilient Spirit" | "Well-Rested" | "Blubbered Up" | "Scowl of the Auk" | "Pride of the Puffin" | "Fightin' Drunk" | "Thinkin' Drunk" | "Jokin' Drunk" | "Flyin' Drunk" | "Covetin' Drunk" | "Dancin' Drunk" | "Comprehensively Nourished" | "Tingling Feeling" | "Abyssal Tears" | "Abyssal Sweat" | "Abyssal Blood" | "Disco Fever" | "Disco Smirk" | "Disco Leer" | "Aquarius Rising" | "Pisces Rising" | "Aries Rising" | "Taurus Rising" | "Gemini Rising" | "Cancer Rising" | "Leo Rising" | "Virgo Rising" | "Libra Rising" | "Scorpio Rising" | "Sagittarius Rising" | "Capricorn Rising" | "Suspicious Gaze" | "Knowing Smile" | "Disco Neuropathy" | "Milk Studly" | "Dweeby" | "Just the Brown Ones" | "Halloweeny" | "Hood Ridin'" | "Spooky Blur" | "Banono" | "Blood-Gorged" | "Bone Chilling" | "Deeply Ironic" | "Winning Smile" | "Bugbear in Tooth and Claw" | "Strong Grip" | "There Is A Spoon" | "Memories of Puppy Love" | "Extra-Sharp Weapon" | "Litterbug" | "Black Day" | "Spirit Souvenirs" | "Blessing of the War Snapper" | "Grand Blessing of the War Snapper" | "Glorious Blessing of the War Snapper" | "Blessing of She-Who-Was" | "Grand Blessing of She-Who-Was" | "Glorious Blessing of She-Who-Was" | "Blessing of the Storm Tortoise" | "Grand Blessing of the Storm Tortoise" | "Glorious Blessing of the Storm Tortoise" | "Disdain of the War Snapper" | "Disdain of She-Who-Was" | "Disdain of the Storm Tortoise" | "Stiff Upper Lip" | "Patient Smile" | "Spiky Shell" | "Spirit Pariah" | "Avatar of the War Snapper" | "Avatar of She-Who-Was" | "Avatar of the Storm Tortoise" | "Boon of the War Snapper" | "Boon of She-Who-Was" | "Boon of the Storm Tortoise" | "Spirit Bubble" | "Spirit Schooled" | "Al Dente Inferno" | "Arched Eyebrow of the Archmage" | "Wizard Squint" | "Flimsy Shield of the Pastalord" | "Shield of the Pastalord" | "Bloody Potato Bits" | "Slinking Noodle Glob" | "Whispering Strands" | "Macaroni Coating" | "Penne Fedora" | "Pasta Eyeball" | "Spice Haze" | "Icy Glare" | "Wry Smile" | "Antibiotic Saucesphere" | "Sauce Monocle" | "Simmering" | "Blood Sugar Sauce Magic" | "Blessing of the Hot Linguine" | "Blessing of the Frozen Tortellini" | "Blessing of the Stinking Alphredo&trade;" | "Blessing of the Pervy Noodles" | "Blessing of the Creepy Pasta" | "Blessing of the Spaghetto" | "Soulerskates" | "Soul Funk" | "Dances with Warbears" | "Bearserker Bearrage" | "Warbear on the Inside" | "Gift of the Warbear" | "Warriors, Come out to Playyyy" | "Superheated Guts" | "Warbear Loot Lust" | "Warbear Warlust" | "Warbear Blubber" | "Merry Smithsness" | "Smithsness Presence" | "Smithsness Dinner" | "Smithsness Cheer" | "Jittery" | "Forbear, Warbears!" | "Loaded Forwarbear" | "Nuts about Candy" | "Bolts about Candy" | "Robocamo" | "Polar Express" | "Don't Step to Your Stepmother" | "Warbear Hunter" | "Gingerbread Robust" | "Petit Force" | "Nut-Rition" | "Reassured" | "Eyes for Miles" | "New and Improved" | "Rolando's Rondo of Resisto" | "Soles of Glass" | "Angry like the Wolf" | "Grumpy and Ornery" | "Frosty" | "Snow Shoes" | "Ice Packed" | "Berry Berry Cold" | "Icy Demeanor" | "Snow Fortified" | "Skull Full of Hot Chocolate" | "Puckered Up" | "Sweet Tooth" | "Pecan Pied Piper" | "Improved Candy Vision" | "Sweet Nostalgia" | "Sourpuss" | "Sweet Taste" | "Gummi Badass" | "High Blood Chocolate Content" | "Hare-Brained" | "Polonoia" | "You're Not Cooking" | "Cold Throat" | "Egg Burps" | "Night of the Nachos" | "Greasy Visage" | "Wreathed in Smoke" | "Medieval Mage Mayhem" | "Grape Expectations" | "Wallflowering" | "Rumpel-pumped" | "Outer Wolf&trade;" | "Beta Carotene Overdose" | "Witch Breaded" | "Hare-o-dynamic" | "Witch's Brood" | "Crappily Disguised as a Waiter" | "Ancient Annoying Serpent Poison" | "The Two-Prong Crown" | "Eagle Eyes" | "Larger" | "Small" | "Helping Comes Second" | "Musky" | "One For Tea" | "The Dark Lord Rides in Force Tonight" | "Punchy, Murdery" | "Red Lettered" | "Unmuffled" | "Muffled" | "Of Course It Looks Great" | "All Revved Up" | "Biker Swagger" | "Living Fast" | "Brooding" | "Jukebox Hero" | "Pompadour" | "Cowlick" | "Fauxhawk" | "Bored With Explosions" | "Ashen" | "Extra-Thick Blood" | "Seeing Red" | "It's Not Even Funny" | "Digitalis, Dig It" | "EVISCERATE!" | "Fangs and Pangs" | "Good Motivator" | "Well Owl Be!" | "Red-Shirted Escort" | "Greasy Peasy" | "Puddingface" | "It's Ridiculous" | "Once Bitten Twice Fried" | "Angry Bone" | "Gunky Dory" | "Permanent Halloween" | "Held Closer" | "Moose Wisdom" | "Browbeaten" | "Rosewater Mark" | "Sepia Tan" | "Fire Inside" | "Funky Coal Patina" | "Bloodstain-Resistant" | "Hardened Fabric" | "Industrial Strength Starch" | "It Tickles!  It Tickles!" | "Human-Human Hybrid" | "Human-Beast Hybrid" | "Human-Machine Hybrid" | "Human-Undead Hybrid" | "Human-Humanoid Hybrid" | "Human-Insect Hybrid" | "Human-Hippy Hybrid" | "Human-Orc Hybrid" | "Human-Demon Hybrid" | "Human-Horror Hybrid" | "Human-Fish Hybrid" | "Human-Goblin Hybrid" | "Human-Pirate Hybrid" | "Human-Plant Hybrid" | "Human-Weird Thing Hybrid" | "Human-Elf Hybrid" | "Human-Mer-kin Hybrid" | "Human-Slime Hybrid" | "Human-Penguin Hybrid" | "Human-Elemental Hybrid" | "Human-Constellation Hybrid" | "Human-Hobo Hybrid" | "Spookyravin'" | "Dancin' Fool" | "Swordholder" | "Is This Your Card?" | "Sleight of Mind" | "Mush-Mouth" | "Boletus Swoletus" | "Omphalotus Omnipresence" | "Gyromitra Gymnastics" | "Helvella Health" | "Stemonitis Storm" | "Tremella Tremens" | "Broberry Brotality" | "Brocolate Brostidigitation" | "French Bronilla Brogueishness" | "Tapped In" | "Go-Gone" | "Shrimpin' Ain't Easy" | "Boilermade" | "Takin' It Greasy" | "Big Meat Big Prizes" | "Yoloswagyoloswag" | "Dance of the Sugar Fairy" | "Sweet Incentive" | "Boschface" | "Desenfantasmada" | "La Oscuridad Adentro" | "Sangre Brillante" | "Black Lung" | "Black Eyes" | "Texas Elegance" | "Salsa Satanica" | "SOME PIGS" | "Space Cowboy" | "I See Everything Thrice!" | "Space Tripping" | "It's Soporiffic!" | "Ashen Burps" | "Liquidy Smoky" | "Barbecue Saucy" | "Marinated" | "On a Roll" | "Lit Up" | "New Zeal" | "White Blooded" | "Gummi-Grin" | "Adorable Lookout" | "High Colognic" | "Spiro Gyro" | "Tortious" | "Over-Familiar With Dactyls" | "The Strength... of the Future" | "The Wisdom... of the Future" | "The Style... of the Future" | "Liquid Luck" | "Meat the Flintstones" | "Hair on Your Chest" | "Thuggity Yak" | "Fit As a Poster" | "Majestic Neckbeard" | "Artisanal Retentive" | "Patchy Punk" | "Full Steam Ahead" | "Hag-gard" | "Muddy Buddy" | "Dazed, Confused" | "Dweeble-Minded" | "Motorhair" | "War is Hol" | "Science is Real" | "Shortie Shaman Shurprise" | "A Taste for Accounting" | "Which Nurse? Witch Nurse!" | "A Short Trial" | "Straw Pole-Ish" | "Bartenderganger" | "Ninja in Waiting" | "Waiting for Ninjas" | "Buttons Rouged, Louisiana" | "Red, Red Skeleton" | "Lynyrd Prytynder" | "Fleet Woodsman, Mac" | "Cult Fiction" | "Jeffersonian" | "Fan Dancing" | "Ecce Wino" | "Black Magic? Woah, Man!" | "Into the Friar" | "Agent's Shield" | "Alien Resurrection" | "On the Trolley" | "In a Lather" | "Feeling No Pain" | "Hip to the Jive" | "Infernal Thirst" | "Turtle Power" | "Colorful Gratitude" | "Fishy, Oily" | "Personal Thundercloud" | "Thunderheart" | "The Rain In Loathing" | "Fishy Whiskers" | "Charged Hair" | "Stormswaddled" | "Hollow Inside" | "The Grass...  Is Blue..." | "Unbarking Dogs" | "Superheroic" | "OMG WTF" | "Notably Lovely" | "Dark Orchestral Song" | "Pet Shop Song" | "Dangerous Zone Song" | "Flashy Dance Song" | "You're Rubber" | "Fizzier Than Light" | "Rain Dancin'" | "Wet and Greedy" | "Ancient Protected" | "Cold as Ice" | "Worth Your Salt" | "The Smeezingtons" | "Minerva's Zen" | "Smoking like a Bandit" | "You're High as a Crow, Marty" | "Sugar-Frosted Pet Guts" | "Sour Grapes" | "You Liver" | "Hypercubed" | "Mr. Skullhead's Birthday Happiness" | "Fruited" | "Flattened" | "Konked on the Head" | "Partially Paralyzed" | "Webbed" | "The Rich Get Richer" | "Experimental Effect G-9" | "Nutrient-Rich" | "Barfpits" | "Eyes All Black" | "You're Back..." | "Heightened Senses" | "Schroedinger's Butt" | "Shawarma Initiative" | "Jungle Juiced" | "Zero Energy" | "Shawarma Warm War" | "All Is Forgiven" | "Mercenary" | "Manbait" | "Empty Inside" | "Intimidating Mien" | "PERL of Great Price" | "Armored Innards" | "Ruby-ous" | "Petit Forbearance" | "Updated" | "Cookie Backup" | "Half-Blooded" | "Half-Drained" | "Vented Spleen" | "BOOsted" | "Moon-Eyed" | "Big Punkin'" | "Took Eleven" | "Turkey-Friendly" | "Turkey-Agitated" | "Turkey-Ambitious" | "So Much Holiday Fun!" | "Bloody Grin" | "Brainworm" | "Herbal Pert" | "Loose Joints" | "Crimbonar" | "Oily Legs" | "Juicy Boost" | "Fitter, Bitter" | "Watch Out!" | "Glasshole" | "Batteries Included" | "Mathematically Precise" | "Ruthlessly Efficient" | "Peaceful, Easy Feeling" | "Confidence!" | "Alpine Mintiness" | "Morninja" | "Wisdom of Thoth" | "Prayer of Seshat" | "Power of Heka" | "Hide of Sobek" | "Shelter of Shed" | "Bounty of Renenutet" | "Purr of the Feline" | "Blessing of Serqet" | "Spiritually Awake" | "Spiritually Aware" | "Spiritually Awash" | "Invisible (20 Minutes Ago)" | "Chunky" | "Jawin'" | "Glo-Face" | "Roly Poly" | "Red in Tooth" | "Influence of Sphere" | "Taunt of Horus" | "Little Mouse Skull Buddy" | "Extra Backbone" | "Almost Cool" | "Bread Burps" | "Vital" | "Toxic Vengeance" | "How to Scam Tourists" | "Stinkybeard" | "Radiated and Grodiated" | "Pajama Party" | "The Dinsey Way" | "The Dinsey Spirit" | "The Dinsey Look" | "Song of the Southern Turtle" | "Nasty, Nasty Breath" | "Rotten Memories" | "Force of Mayo Be With You" | "Tropical Contact High" | "Curse of Randomness" | "Pill Power" | "Nigh-Invincible" | "Going Ape" | "Analog Drunk" | "Sludgesick" | "&Uuml;berraschthexengebr&uuml;hten" | "Pigulated" | "Waterborne" | "Xiblaxian Sympathizer" | "CONSUME" | "Kung-Furious" | "SNAPPED INTO IT" | "Rented Costume" | "Built Body" | "No Accounting for... Barbarians" | "Ennerderated" | "Catstermind" | "A Lovely Day for a Beatnik" | "Smoothly Criminal...ing" | "Connering the Seanman" | "Literally On Fire" | "Lookin' at Some Burning Cereal" | "Looking at Fire" | "The Perfect Snowman Disguise" | "Magreame Headache" | "Icebergled" | "Mrs. Frozen" | "Cheezardly" | "Wearing Assassin Robes" | "Odoriffic" | "When the Plague Hits Your Eye" | "Batwards Masking" | "Big Square Head" | "Grease Trappings" | "Shahamaniacal" | "Porkpocketed" | "Leonarded" | "Wearing a Guard's Hat" | "Janitoriffic" | "Disguised as a Warehouse Clerk" | "All Dolled Up" | "Shiny Happy Gladiator" | "The Saddest Helmet" | "Radiarius" | "Shiny and Chrome" | "Monkeymask" | "Dead Man's Handoff" | "Two Car Bar Rag" | "Tetched by an Angel" | "Skeleton's Day Out" | "They Called You Mad at the University" | "9/10ths of the Law" | "Cyber-Robo-Steam-Whatever Costume" | "Ramboner" | "Does Whatever a Person Can" | "The Visible Adventurer" | "Cavemanipulated" | "Your Head is That of a Hawk" | "Kid Dracularp" | "Devil Woman (or Man)" | "Shopkeeperrific" | "Autopsy-turvy" | "Skeleton in a Fruit Hat" | "Skinvisible" | "Stubblebum" | "Slurpee-O'ed" | "Pediplunger" | "Godfather of Soul Patch" | "Beyond the Pail" | "Why is the Shampoo Always Gone?" | "Bubbles, Tiny Bubbles" | "Whose Drinks Are These?" | "Pained Smirk" | "WAKKA WAKKA WAKKA" | "Ready to Snap" | "Giant Growth" | "Racing!" | "Magicianship" | "Strongly Motivated" | "Fortune of the Wheel" | "Balls of Ectoplasm" | "Mushroom Might" | "Fungal Fortification" | "Mushroom Magicalness" | "Fungal Flamb\u00E9" | "Mushroom Moxiousness" | "Mushroom Melody" | "Burning Tongue" | "Pyromania" | "Red Menace" | "Blue Eyed Devil" | "Green Peace" | "Inner Warmth" | "Sparkly!" | "Buttermilk Boogie" | "Quaaaaaaa" | "Insatiable Hunger" | "Demonicity" | "Kissed By Fire" | "Drenched in Lava" | "Doing The Hustle" | "Lemony Goodness" | "Nearly All-Natural" | "Amazing" | "Throwing Some Shade" | "A Rose by Any Other Material" | "Gaze of the Gazelle" | "East of Eaten" | "Robot Friends" | "Margamergency" | "Smart Drunk" | "Barrel Chested" | "Barrel of Laughs" | "Pork Barrel" | "Warlock, Warstock, and Warbarrel" | "Double-Barreled" | "Beer Barrel Polka" | "Bricked-In" | "Just Aged Enough" | "Briny Blood" | "Shortened" | "Weird Vibrations" | "Cute Vision" | "Flamibili Tea" | "Yet tea" | "Boo Tea" | "Nas Tea" | "Improprie Tea" | "Frost Tea" | "Toast Tea" | "Net Tea" | "Proprie Tea" | "Morbidi Tea" | "Chari Tea" | "Serendipi Tea" | "Feroci Tea" | "Physicali Tea" | "Wit Tea" | "Neuroplastici Tea" | "Dexteri Tea" | "Flexibili Tea" | "Impregnabili Tea" | "Obscuri Tea" | "Irritabili Tea" | "Mediocri Tea" | "Loyal Tea" | "Your Eyes are Peeled!" | "Guts Feeling" | "Alacri Tea" | "Vitali Tea" | "Mana Tea" | "Monstrosi Tea" | "Twen Tea" | "Bloodthirsty" | "Toothy Grin" | "Craft Tea" | "It's Good To Be Royal!" | "Inner Elf" | "Bruised" | "Insani Tea" | "Adventurer's Best Friendship" | "Tennis Elbow-wow" | "Oth-Jeal-O" | "Oh Hamlet Hamlet Hamlet Hamlet" | "Booooooze" | "Inside The Snowglobe" | "Action" | "Thought" | "Sensation" | "Octolus Gift" | "Appeteyes" | "Norwhalloped" | "Warm Shoulders" | "Headstrong" | "Brain Freeze" | "Frostbeard" | "This Is Where You're a Viking" | "Expert Vacationer" | "Spiky Frozen Hair" | "Yeah, It's Just Gasoline" | "Coldfinger" | "Stogied" | "Conspiratory Eyes" | "Painted-On Bikini" | "Purpose" | "Category" | "Perception" | "Motion" | "Joy" | "Certainty" | "Relaxed Muscles" | "You Ate Some Hemp Candy" | "The Magic of Sharing" | "Salad Days" | "Bread-Lined" | "Bark of the Dog" | "Putting the Pro in Proletariat" | "Ironclad" | "Hypnotized" | "Bad Haircut" | "Snowballed" | "Ancient Fortitude" | "Feelin' the Rhythm!" | "Weally Satisfied" | "Litely Baked" | "More Mansquito Than Man" | "It's a Good Life!" | "The Inquisitor's Unknown Effect" | "Behind the Green Curtain" | "Why So Serious?" | "Egged On" | "Slawdered" | "Blood of the Jerk that Bit You" | "One Lip in the Grave" | "Crystalleyesd" | "The Other" | "Madly Liberated" | "Swung Step" | "Burns Effect" | "You've Got Questions" | "Nyah-ha-ha-haaa" | "Milk is Blood is Milk" | "The Moomy's Curse" | "Poker Faced" | "Cowrruption" | "Itchy Trigger Finger" | "Partially Ghosted" | "Buzzard Breath" | "Lion in Ambush" | "Bear Clawed" | "Venomous Weapon" | "Coal-Powered" | "Spidercow Vision" | "Bow-Legged Swagger" | "Bendin' Hell" | "Steely-Eyed Squint" | "Tightly-Wound Spine" | "Cautious Prowl" | "Prideful Strut" | "Leisurely Amblin'" | "Oiled Skin" | "Unusual Perspective" | "Uncanny Shot" | "Patent Prevention" | "Patent Invisibility" | "Patent Aggression" | "Patent Sallowness" | "Patent Avarice" | "Patent Alacrity" | "Rushtacean'" | "Kicked in the Sinuses" | "Sacr&eacute; Mental" | "Sweetbreads Flamb&eacute;" | "Puzzle Champ" | "Baited Hook" | "A Real Head for Fish" | "High-Test Fishing Line" | "Rational Thought" | "Internate Debatable" | "Feeling Queasy" | "Jacked In" | "Speed of the Internet" | "Latency" | "meat.enh" | "items.enh" | "init.enh" | "substats.enh" | "damage.enh" | "critical.enh" | "familiar.enq" | "monsters.enq" | "protect.enq" | "stats.enq" | "Turbocharged" | "Overheated" | "Too Noir For Snoir" | "Gummed Shoes" | "Total Protonic Reversal" | "Ear Winds" | "Hardened Sweatshirt" | "Juiced and Loose" | "Mind Vision" | "Impeccable Coiffure" | "Bone Springs" | "Magnetized Ears" | "Blinking Belly" | "Inked Well" | "Punchable Face" | "Record Hunger" | "Drunk and Avuncular" | "Rad-Pro Tected" | "Shrieking Weasel" | "Power, Man" | "Lucky Struck" | "Ministrations in the Dark" | "Superdrifting" | "Spa Day!" | "Made Up, Watered Down" | "Amplified Fabulousness" | "Not Sharing" | "She Ate Too Much Candy" | "Invisible Ties" | "Invisibly Ripped" | "The Good Salmonella" | "Thanksgetting" | "Thanksgot" | "Eldritch Concentration" | "Eldritch Attunement" | "Sprinkle in Your Eye" | "Iced and Tainted" | "Whole Latte Love" | "Industrially Frosted" | "Liquor-ish" | "Your Fifteen Minutes" | "Sprinkle Sense" | "High-Falutin'" | "Innately Wise" | "Innately Strong" | "Innately Truthy" | "Aerated" | "Wrought Nerves" | "Gabarding" | "Insulated" | "The Power of Positive Thinking" | "The Power of Negative Thinking" | "Synthesis: Hot" | "Synthesis: Cold" | "Synthesis: Pungent" | "Synthesis: Scary" | "Synthesis: Greasy" | "Synthesis: Strong" | "Synthesis: Smart" | "Synthesis: Cool" | "Synthesis: Hardy" | "Synthesis: Energy" | "Synthesis: Greed" | "Synthesis: Collection" | "Synthesis: Movement" | "Synthesis: Learning" | "Synthesis: Style" | "Hot Jellied" | "Cold Jellied" | "Sleazy Jellied" | "Spooky Jellied" | "Stench Jellied" | "Waxing" | "Super-Electrified" | "Trufflin'" | "The Power of LOV" | "The Magic of LOV" | "The Moxie of LOV" | "Open Heart Surgery" | "Lovebotamy" | "Wandering Eye Surgery" | "Eldritch Alignment" | "Feeling Insignificant" | "Infused with Sssshhsssblllrrggghsssssggggrrgglssss" | "Hagnk's Gratitude" | "Wings of the Grasshopper" | "Wings of the Dragonfly" | "Space Cadet" | "Pounded by the Actual Stars" | "Flamb\u00E9-a-thon" | "It Is So Hot In Your Guts, So So Hot" | "Sugar, Hello" | "Magically Delicious" | "Christmessy" | "Wassailing You" | "Floundering" | "Fishtacular Vernacular" | "Mushroom Samba" | "Truffle Tango" | "Granolarrrgh" | "Hell ib a Hambasked" | "Hobo Powers Activate!" | "Hobo Powering Up!" | "Creepin' Up on You" | "The Effect Man Was Not Meant to Have" | "Stregngth of the Gnome" | "Strength of the Gnoll" | "Mer-kindliness" | "Mer-kinkiness" | "Slippery Tongue" | "Orcmouth" | "You Drank Fish Wine" | "Drive-By Shot" | "Big Ol' Glass of Rum" | "Kissed the Gunner's Daughter" | "Here's Mud in Your Eye" | "Here's Some More Mud in Your Eye" | "Slime Time" | "The Secret of the Ooze" | "Nothing Happened" | "Hello, I Must Be Going" | "Bent Knees" | "Extended Toes" | "Ink Cloud" | "Frown" | "Angry" | "Screaming!  SCREAMING!  AAAAAAAH!" | "Rainbow Vaccine" | "Broad-Spectrum Vaccine" | "Emotional Vaccine" | "Celestial Mind" | "Celestial Body" | "Preemptive Medicine" | "Shielded Unit" | "Spring Training" | "Hyperoxygenated Blood" | "Spirit of Galactic Unity" | "Always be Collecting" | "Think Win-Lose" | "Become Superficially interested" | "Become Intensely interested" | "Adapt to Change Eventually" | "Be a Mind Master" | "Work For Hours a Week" | "Keep Free Hate in your Heart" | "Disavowed" | "Annoyed by Threats" | "Punch Another Day" | "For Your Brain Only" | "Quantum of Moxie" | "License to Punch" | "Thunderspell" | "Goldentongue" | "The Living Hitpoints" | "Initiative and Let Die" | "A View to Some Meat" | "Items Are Forever" | "The Spy Who Loved XP" | "Sugary World View" | "Driving Obnoxiously" | "Driving Stealthily" | "Driving Wastefully" | "Driving Safely" | "Driving Recklessly" | "Driving Quickly" | "Driving Intimidatingly" | "Driving Observantly" | "Driving Waterproofly" | "Meteor Showered" | "Superioreo" | "Meadulla Oblongota" | "What Are The Odds!?" | "Favored by Lyle" | "Sucrose-Colored Glasses" | "Straight-Edgy" | "Broken Bone Nubs" | "Booze Goozles" | "Turn On, Tune In, Play Ball!" | "Habituated" | "Stick Emporium Membership" | "Chondruling" | "Holiday Disappointment" | "Noise Cancelled" | "Old Time Hydration" | "Slightly Cursed, Mostly Lucky" | "All Branned Up" | "All Blued Up" | "Silent Hunting" | "Nearly Silent Hunting" | "Quiet Determination" | "Quiet Judgement" | "Quiet Desperation" | "I'll Have the Soup" | "Invisible Avarice" | "Cheered Up" | "Mimeoflage" | "Negavision" | "Double Negavision" | "Executive Greed" | "Burnt 'n' Turnt" | "Stop the Presses!" | "Nightlit" | "Sweetened and Fattened" | "Quiet 'n' Good" | "Hot Buttoned" | "Beefy" | "Riboflavin'" | "Sharpened Sweet Tooth" | "Like a Fish to Walter" | "Third Based" | "Bustle Hustlin'" | "Faboooo" | "Paging Betty" | "Bandersnatched" | "Graham Crackling" | "Tasting the Rainbow" | "Your Favorite Flavor" | "A Girl Named Sue" | "There's No N in Love" | "Meet the Meat" | "Gunther Than Thou" | "Everybody Calls Him Gorgon" | "They Call Him Shifty Because..." | "Big" | "Inscrutable Gaze" | "Tainted Love Potion" | "Paul's Passionate Pop Song" | "Rhinestoned" | "Berry Critical" | "Berry Thorny" | "Berry Elemental" | "Berry Statistical" | "Berry Defensive" | "Berry Experiential" | "Eggstraordinary Strength" | "Eggstraordinary Brilliance" | "Eggstraordinary Style" | "Eggscitingly Colorful" | "Pearly Vision" | "Lustre After Wealth" | "Gleam-Inducing" | "Fantasy Faerie Blessing" | "Poison For Blood" | "Brewed Up" | "Fantastical Health" | "Fantastic Immunity" | "Fortunate, Son" | "Faerie Fortune" | "Fanatical Fortune" | "Heroic Fortune" | "Powder Power" | "Artisanal Satiaton" | "Wisdom of the God Lobster" | "Intuition of the God Lobster" | "Silence of the God Lobster" | "Color of the God Lobster" | "Carapace of the God Lobster" | "Taste of the God Lobster" | "Gettin' the Goods" | "Remaining Alive" | "Feeling Punchy" | "Bastille Budgeteer" | "Bastille Bourgeoisie" | "Bastille Braggadocio" | "Shark-Tooth Grin" | "Boiling Determination" | "Enhanced Interrogation" | "Tomes of Opportunity" | "Spiced Up" | "Citronella Armpits" | "The Best Hair You've Ever Had" | "Unrunnable Face" | "Lifted Spirits" | "Party on Your Skin" | "Haunted Stomach" | "Haunted Liver" | "On Safari" | "Yeast-Hungry" | "Long Winter's Napped" | "Moose-Warmed Belly" | "Boxing Day Breakfast" | "Boxing Day Drinking" | "Boxing Day Glow" | "Muddled" | "Uncucumbered" | "Ten out of Ten" | "Flagrantly Fragrant" | "Crimbeau'd" | "Carol of the Bulls" | "Carol of the Hells" | "Carol of the Thrills" | "Watched Over" | "Chalked-Up Teeth" | "Marbles in Your Mouth" | "Proto-Stimulated" | "Chai Guru Deva Om" | "Whippin' It Good" | "Slightly Mutated" | "Standard Cheer" | "Bubblin' Rage" | "Wolf Form" | "Mist Form" | "Bats Form" | "Ceaseless Snarling" | "Cloak of Shadows" | "Spectral Awareness" | "Frenzied, Bloody" | "Blood Bond" | "Blood Bubble" | "Bram's Bloody Bagatelle" | "The Best a Pirate Can Get" | "Mint-Condition Breath" | "Pewtershot" | "Wolfish Form" | "Misty Form" | "Bat-Adjacent Form" | "Icy Composition" | "Tiki Toughness" | "Tiki Thoughtfulness" | "Tiki Temerity" | "Spoon Boon" | "Harpooned and Marooned" | "Too Cool for (Fish) School" | "Shells of the Damned" | "Worst Willy" | "On Smellier Tides" | "Boisterous Oysterous" | "Does a Body Good" | "Hot-Headed" | "Cold as Nice" | "A Brush with Grossness" | "Does It Have a Skull In There??" | "Oiled, Slick" | "Lack of Body-Building" | "We're All Made of Starfish" | "Pomp & Circumsands" | "Resting Beach Face" | "Do I Know You From Somewhere?" | "You Learned Something Maybe!" | "Fishing For Knowledge" | "Sweet Pirate Curse" | "Muscular Intentions" | "Mystical Intentions" | "Moxious Intentions" | "Traditional Eating" | "Trial by Campfire" | "Gimme, Gimme" | "The More You Eat" | "Just Like Me, They Want to Be" | "Coffee Achiever" | "That's Just Cloud-Talk, Man" | "Smile of the Mongoose" | "Smile of the Wallaby" | "Smile of the Vole" | "Smile of the Platypus" | "Smile of the Opossum" | "Smile of the Marmot" | "Smile of the Wombat" | "Smile of the Blender" | "Smile of the Packrat" | "Big Smile of the Mongoose" | "Big Smile of the Wallaby" | "Big Smile of the Vole" | "Big Smile of the Platypus" | "Big Smile of the Opossum" | "Big Smile of the Marmot" | "Big Smile of the Wombat" | "Big Smile of the Blender" | "Big Smile of the Packrat" | "Rainbowolin" | "Hulkien" | "Fidoxene" | "Funday!" | "Festively Brined" | "Baja, Humbug" | "Mana-Blasted" | "Furrier Than Thou" | "Potpourri Committed" | "Gooed Enough For Government Work" | "Good Chance of Surviving Hell" | "Pleasant Forecast" | "Lividly Energized" | "A Bug's Life" | "HGH-charged" | "Different Way of Seeing Things" | "Thou Shant Not Sing" | "Sea Seeing" | "Industrially Lubricated" | "Eau d' Clochard" | "Candied Teeth" | "Molasses Flooded" | "PING...  PING...  PING..." | "The Spirit of Taking" | "Sea Guts" | "Fish-Eye View" | "Salt Rush" | "Possessive Pressure" | "Dreaming of a Wet Crimbo" | "Mixed Nutrients" | "Almond Allemande" | "Para-lyzed Jaw" | "Panna Consideration" | "Blessing of the Bird" | "Blessing of your favorite Bird" | "Invisible Avatar" | "Triple-Sized" | "Warmed Up" | "Heated Up" | "Half-Sized" | "Fizzy Fizzy" | "Juicy Health" | "Blooper Inked" | "Mushed" | "Piranha Power" | "Mush-Maw" | "On the Rocks" | "Touched" | "Sulfurous Sinuses" | "Steamed" | "Buttery, Boy" | "Extra Spongy" | "Bit-o-Salt" | "Slithering Mounds" | "Snichors" | "Spit Upon" | "Entauntauned" | "You Have Ever Seen The Rain" | "Goo Vibrations" | "Wary" | "Joke-Mad" | "Sizzlin' Hand" | "Frosty Hand" | "Foul Hand" | "Spooky Hand" | "Nasty Hand" | "Yeg's Glory" | "You Pray To Yeg Your Soul To Keep" | "Rictus of Yeg" | "Sigils of Yeg" | "Breath of Yeg" | "Yeg's Power" | "Barely Visible" | "Very Attractive" | "Finding Stuff" | "Yeg's Keeping" | "All Chipped Up" | "Started Your Day Right" | "Cartographically Charged" | "Cartographically Aware" | "Cartographically Rooted";
    class Effect extends MafiaClass {
        static get<T = Effect>(name: EffectType): T;
        static get<T = Effect>(names: EffectType[]): T[];
        static all<T = Effect>(): T[];
        /**
         * Name */
        readonly name: string;
        /**
         * Default */
        readonly default: string;
        /**
         * Quality */
        readonly quality: string;
        /**
         * Attributes */
        readonly attributes: string;
        /**
         * Note */
        readonly note: string;
        /**
         * All */
        readonly all: { [source: string]: boolean };
        /**
         * Image */
        readonly image: string;
        /**
         * Descid */
        readonly descid: string;
        /**
         * Candy tier */
        readonly candy_tier: number;
    }
    type ElementType = string;
    class Element extends MafiaClass {
        static get<T = Element>(name: ElementType): T;
        static get<T = Element>(names: ElementType[]): T[];
        static all<T = Element>(): T[];
        /**
         * Image */
        readonly image: string;
    }
    type FamiliarType = string;
    class Familiar extends MafiaClass {
        static get<T = Familiar>(name: FamiliarType): T;
        static get<T = Familiar>(names: FamiliarType[]): T[];
        static all<T = Familiar>(): T[];
        /**
         * Hatchling */
        readonly hatchling: Item;
        /**
         * Image */
        readonly image: string;
        /**
         * Name */
        readonly name: string;
        /**
         * Experience */
        readonly experience: number;
        /**
         * Charges */
        readonly charges: number;
        /**
         * Drop name */
        readonly drop_name: string;
        /**
         * Drop item */
        readonly drop_item: Item;
        /**
         * Drops today */
        readonly drops_today: number;
        /**
         * Drops limit */
        readonly drops_limit: number;
        /**
         * Fights today */
        readonly fights_today: number;
        /**
         * Fights limit */
        readonly fights_limit: number;
        /**
         * Combat */
        readonly combat: boolean;
        /**
         * Physical damage */
        readonly physical_damage: boolean;
        /**
         * Elemental damage */
        readonly elemental_damage: boolean;
        /**
         * Block */
        readonly block: boolean;
        /**
         * Delevel */
        readonly delevel: boolean;
        /**
         * Hp during combat */
        readonly hp_during_combat: boolean;
        /**
         * Mp during combat */
        readonly mp_during_combat: boolean;
        /**
         * Other action during combat */
        readonly other_action_during_combat: boolean;
        /**
         * Hp after combat */
        readonly hp_after_combat: boolean;
        /**
         * Mp after combat */
        readonly mp_after_combat: boolean;
        /**
         * Other action after combat */
        readonly other_action_after_combat: boolean;
        /**
         * Passive */
        readonly passive: boolean;
        /**
         * Underwater */
        readonly underwater: boolean;
        /**
         * Variable */
        readonly variable: boolean;
        /**
         * Attributes */
        readonly attributes: string;
        /**
         * Poke level */
        readonly poke_level: number;
        /**
         * Poke level 2 power */
        readonly poke_level_2_power: number;
        /**
         * Poke level 2 hp */
        readonly poke_level_2_hp: number;
        /**
         * Poke level 3 power */
        readonly poke_level_3_power: number;
        /**
         * Poke level 3 hp */
        readonly poke_level_3_hp: number;
        /**
         * Poke level 4 power */
        readonly poke_level_4_power: number;
        /**
         * Poke level 4 hp */
        readonly poke_level_4_hp: number;
        /**
         * Poke move 1 */
        readonly poke_move_1: string;
        /**
         * Poke move 2 */
        readonly poke_move_2: string;
        /**
         * Poke move 3 */
        readonly poke_move_3: string;
        /**
         * Poke attribute */
        readonly poke_attribute: string;
    }
    type ItemType = string;
    class Item extends MafiaClass {
        static get<T = Item>(name: ItemType): T;
        static get<T = Item>(names: ItemType[]): T[];
        static all<T = Item>(): T[];
        /**
         * The name of this Item. */
        readonly name: string;
        /**
         * The name of this Item as it appears in your current Two Crazy Random Summer run. If you are not in a TCRS run, the regular Item name is returned. */
        readonly tcrs_name: string;
        /**
         * The plural of this Item. If the official plural is not known, returns the name of this Item with an "s" appended. */
        readonly plural: string;
        /**
         * The identifier used to see the description of this Item. */
        readonly descid: string;
        /**
         * The filename of the image associated with this Item. */
        readonly image: string;
        /**
         * The filename of the small image associated with this Item. For items with an image that is usually larger than 30x30, this is their 30x30 equivalent. For example, the images for "folders" from the "over-the-shoulder Folder Holder" will normally be 100x100 but this will return a 30x30 equivalent. */
        readonly smallimage: string;
        /**
         * The level requirement for consuming or equipping this Item. */
        readonly levelreq: number;
        /**
         * The quality of this Item if it is a consumable, or blank otherwise. Quality can be one of "decent", "crappy", "good", "awesome", "EPIC" or "". */
        readonly quality: string;
        /**
         * The range of adventures gained from consuming this Item. The string will either contain the adventures for invariant gains, or a hyphen-separated minimum and maximum for variant gains. */
        readonly adventures: string;
        /**
         * The range of muscle substats gained from consuming this Item. The string will either contain the substats for invariant gains, or a hyphen-separated minimum and maximum for variant gains. Note that substat gains can be negative. */
        readonly muscle: string;
        /**
         * The range of mysticality substats gained from consuming this Item. The string will either contain the substats for invariant gains, or a hyphen-separated minimum and maximum for variant gains. Note that substat gains can be negative. */
        readonly mysticality: string;
        /**
         * The range of moxie substats gained from consuming this Item. The string will either contain the substats for invariant gains, or a hyphen-separated minimum and maximum for variant gains. Note that substat gains can be negative. */
        readonly moxie: string;
        /**
         * The stomach size of this Item. If this Item is not edible, returns 0. */
        readonly fullness: number;
        /**
         * The liver size of this Item. If this Item is not drinkable, returns 0. */
        readonly inebriety: number;
        /**
         * The spleen size of this Item. If this Item is not chewable, returns 0. */
        readonly spleen: number;
        /**
         * The minimum HP restored by consuming this Item. */
        readonly minhp: number;
        /**
         * The maximum HP restored by consuming this Item. */
        readonly maxhp: number;
        /**
         * The minimum MP restored by consuming this Item. */
        readonly minmp: number;
        /**
         * The maximum MP restored by consuming this Item. */
        readonly maxmp: number;
        /**
         * The number of daily uses remaining for this Item. */
        readonly dailyusesleft: number;
        /**
         * The notes that exist for this Item. Examples of (comma-separated) contents are:
         * 
         * *   The name and duration of any effects granted by consumption, if applicable.
         * *   Items dropped when this Item is consumed, if applicable.
         * *   Tags relevant to game mechanics (such as "MARTINI", "BEER" and "SAUCY")
         * *   "Unspaded" */
        readonly notes: string;
        /**
         * `true` if this Item is a quest item, else `false`. */
        readonly quest: boolean;
        /**
         * `true` if this Item is a gift item, else `false`. */
        readonly gift: boolean;
        /**
         * `true` if this Item is tradeable, else `false`. */
        readonly tradeable: boolean;
        /**
         * `true` if this Item is discardable, else `false`. */
        readonly discardable: boolean;
        /**
         * `true` if this Item usable in combat, else `false`. This returns `true` regardless of whether this Item is consumed when used in combat. */
        readonly combat: boolean;
        /**
         * `true` if this Item is usable in combat and is not consumed when doing so, else `false`. */
        readonly combat_reusable: boolean;
        /**
         * `true` if this Item is usable, else `false`. This returns `true` regardless of whether this Item is consumed when used. */
        readonly usable: boolean;
        /**
         * `true` if this Item is usable and is not consumed when doing so, else `false`. */
        readonly reusable: boolean;
        /**
         * `true` if more than one of this Item can be used at once, else `false`. */
        readonly multi: boolean;
        /**
         * `true` if this Item is a "fancy" ingredient, else `false`. */
        readonly fancy: boolean;
        /**
         * `true` if this Item is a meatpasting ingredient, else `false`. */
        readonly pasteable: boolean;
        /**
         * `true` if this Item is a meatsmithing ingredient, else `false`. */
        readonly smithable: boolean;
        /**
         * `true` if this Item is a cooking ingredient, else `false`. */
        readonly cookable: boolean;
        /**
         * `true` if this Item is a cocktailcrafting ingredient, else `false`. */
        readonly mixable: boolean;
        /**
         * `true` if this Item is a candy, else `false`. */
        readonly candy: boolean;
        /**
         * The candy type of this Item if it is a candy, or blank otherwise. Candy type can be one of "simple", "complex" or "unspaded". */
        readonly candy_type: string;
        /**
         * `true` if this Item is a chocolate, else `false`. */
        readonly chocolate: boolean;
        /**
         * Which Coinmaster sells this Item, if any. */
        readonly seller: Coinmaster;
        /**
         * Which Coinmaster buys this Item, if any. */
        readonly buyer: Coinmaster;
        /**
         * The length of this Item's display name. */
        readonly name_length: number;
        /**
         * The noob Skill granted by absorbing this Item. */
        readonly noob_skill: Skill;
    }
    type LocationType = string;
    class Location extends MafiaClass {
        static get<T = Location>(name: LocationType): T;
        static get<T = Location>(names: LocationType[]): T[];
        static all<T = Location>(): T[];
        /**
         * Nocombats */
        readonly nocombats: boolean;
        /**
         * Combat percent */
        readonly combat_percent: number;
        /**
         * Zone */
        readonly zone: string;
        /**
         * Parent */
        readonly parent: string;
        /**
         * Parentdesc */
        readonly parentdesc: string;
        /**
         * Environment */
        readonly environment: string;
        /**
         * Bounty */
        readonly bounty: Bounty;
        /**
         * Combat queue */
        readonly combat_queue: string;
        /**
         * Noncombat queue */
        readonly noncombat_queue: string;
        /**
         * Turns spent */
        readonly turns_spent: number;
        /**
         * Kisses */
        readonly kisses: number;
        /**
         * Recommended stat */
        readonly recommended_stat: number;
        /**
         * Water level */
        readonly water_level: number;
        /**
         * Wanderers */
        readonly wanderers: boolean;
    }
    type MonsterType = string;
    class Monster extends MafiaClass {
        static get<T = Monster>(name: MonsterType): T;
        static get<T = Monster>(names: MonsterType[]): T[];
        static all<T = Monster>(): T[];
        /**
         * Name */
        readonly name: string;
        /**
         * Id */
        readonly id: number;
        /**
         * Base hp */
        readonly base_hp: number;
        /**
         * Base attack */
        readonly base_attack: number;
        /**
         * Raw hp */
        readonly raw_hp: number;
        /**
         * Raw attack */
        readonly raw_attack: number;
        /**
         * Raw defense */
        readonly raw_defense: number;
        /**
         * Base defense */
        readonly base_defense: number;
        /**
         * Base initiative */
        readonly base_initiative: number;
        /**
         * Raw initiative */
        readonly raw_initiative: number;
        /**
         * Attack element */
        readonly attack_element: Element;
        /**
         * Defense element */
        readonly defense_element: Element;
        /**
         * Physical resistance */
        readonly physical_resistance: number;
        /**
         * Min meat */
        readonly min_meat: number;
        /**
         * Max meat */
        readonly max_meat: number;
        /**
         * Min sprinkles */
        readonly min_sprinkles: number;
        /**
         * Max sprinkles */
        readonly max_sprinkles: number;
        /**
         * Base mainstat exp */
        readonly base_mainstat_exp: number;
        /**
         * Phylum */
        readonly phylum: Phylum;
        /**
         * Poison */
        readonly poison: Effect;
        /**
         * Boss */
        readonly boss: boolean;
        /**
         * Copyable */
        readonly copyable: boolean;
        /**
         * Image */
        readonly image: string;
        /**
         * Images */
        readonly images: { [image: string]: boolean };
        /**
         * Random modifiers */
        readonly random_modifiers: { [randomModifier: string]: boolean };
        /**
         * Sub types */
        readonly sub_types: { [subType: string]: boolean };
        /**
         * Manuel name */
        readonly manuel_name: string;
        /**
         * Wiki name */
        readonly wiki_name: string;
        /**
         * Attributes */
        readonly attributes: string;
    }
    type PhylumType = string;
    class Phylum extends MafiaClass {
        static get<T = Phylum>(name: PhylumType): T;
        static get<T = Phylum>(names: PhylumType[]): T[];
        static all<T = Phylum>(): T[];
        /**
         * Image */
        readonly image: string;
    }
    type ServantType = string;
    class Servant extends MafiaClass {
        static get<T = Servant>(name: ServantType): T;
        static get<T = Servant>(names: ServantType[]): T[];
        static all<T = Servant>(): T[];
        /**
         * Id */
        readonly id: number;
        /**
         * Name */
        readonly name: string;
        /**
         * Level */
        readonly level: number;
        /**
         * Experience */
        readonly experience: number;
        /**
         * Image */
        readonly image: string;
        /**
         * Level1 ability */
        readonly level1_ability: string;
        /**
         * Level7 ability */
        readonly level7_ability: string;
        /**
         * Level14 ability */
        readonly level14_ability: string;
        /**
         * Level21 ability */
        readonly level21_ability: string;
    }
    type SkillType = string;
    class Skill extends MafiaClass {
        static get<T = Skill>(name: SkillType): T;
        static get<T = Skill>(names: SkillType[]): T[];
        static all<T = Skill>(): T[];
        /**
         * Name */
        readonly name: string;
        /**
         * Type */
        readonly type: string;
        /**
         * Level */
        readonly level: number;
        /**
         * Image */
        readonly image: string;
        /**
         * Traincost */
        readonly traincost: number;
        /**
         * Class */
        readonly class: Class;
        /**
         * Libram */
        readonly libram: boolean;
        /**
         * Passive */
        readonly passive: boolean;
        /**
         * Buff */
        readonly buff: boolean;
        /**
         * Combat */
        readonly combat: boolean;
        /**
         * Song */
        readonly song: boolean;
        /**
         * Expression */
        readonly expression: boolean;
        /**
         * Walk */
        readonly walk: boolean;
        /**
         * Summon */
        readonly summon: boolean;
        /**
         * Permable */
        readonly permable: boolean;
        /**
         * Dailylimit */
        readonly dailylimit: number;
        /**
         * Timescast */
        readonly timescast: number;
    }
    type ThrallType = string;
    class Thrall extends MafiaClass {
        static get<T = Thrall>(name: ThrallType): T;
        static get<T = Thrall>(names: ThrallType[]): T[];
        static all<T = Thrall>(): T[];
        /**
         * Id */
        readonly id: number;
        /**
         * Name */
        readonly name: string;
        /**
         * Level */
        readonly level: number;
        /**
         * Image */
        readonly image: string;
        /**
         * Tinyimage */
        readonly tinyimage: string;
        /**
         * Skill */
        readonly skill: Skill;
        /**
         * Current modifiers */
        readonly current_modifiers: string;
    }
    type VykeaType = string;
    class Vykea extends MafiaClass {
        static get<T = Vykea>(name: VykeaType): T;
        static get<T = Vykea>(names: VykeaType[]): T[];
        static all<T = Vykea>(): T[];
        /**
         * Id */
        readonly id: number;
        /**
         * Name */
        readonly name: string;
        /**
         * Type */
        readonly type: string;
        /**
         * Rune */
        readonly rune: Item;
        /**
         * Level */
        readonly level: number;
        /**
         * Image */
        readonly image: string;
        /**
         * Modifiers */
        readonly modifiers: string;
        /**
         * Attack element */
        readonly attack_element: Element;
    }
    type SlotType = string;
    class Slot extends MafiaClass {
        static get<T = Slot>(name: SlotType): T;
        static get<T = Slot>(names: SlotType[]): T[];
        static all<T = Slot>(): T[];
    }
    type StatType = string;
    class Stat extends MafiaClass {
        static get<T = Stat>(name: StatType): T;
        static get<T = Stat>(names: StatType[]): T[];
        static all<T = Stat>(): T[];
    }
}
