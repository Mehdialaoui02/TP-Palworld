// import {MasterTrainer} from "./masterTrainer.interface.ts";
import path from "path";
import fs from "fs";
import {getBadge} from "../badge/badge.service.ts";
import {getCreature} from "../creature/creature.service.ts";
import {MasterTrainer} from "./masterTrainer.interface.ts";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface parsedTrainer {
    id: number;
    name: string;
    creatures: string[];
    badges: number[];
    message_ids: string[];
    invitation_ids: string[];
    match_history_ids: string[];
}

export const loadTrainers = (): MasterTrainer[] => {
    const filePath = path.join(__dirname, 'trainers.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const parsedTrainers = JSON.parse(fileData) as parsedTrainer[];

    return parsedTrainers.map((trainer: parsedTrainer) => ({
        ...trainer,
        creatures: trainer.creatures.map((id) => getCreature(id)),
        badges: trainer.badges.map((id) => getBadge(id))
        // TO DO ADD Messages, Invitations and match history
    }));
};
