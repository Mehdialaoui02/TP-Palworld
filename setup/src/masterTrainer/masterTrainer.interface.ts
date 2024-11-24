import {Badge} from "../badge/badge.interface.ts";
import {Creature} from "../creature/creature.interface.ts";

export interface MasterTrainer {
    id: number;
    name: string;
    creatures: (Creature | null)[];
    badges: (Badge | null)[];
    message_ids: string[];
    invitation_ids: string[];
    match_history_ids: string[];
}