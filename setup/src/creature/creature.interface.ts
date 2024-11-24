import {CreatureStats} from "../match/match.interfaces.ts";

export interface Creature {
    id: string;
    name: string;
    price: number;
    stats: CreatureStats;
}