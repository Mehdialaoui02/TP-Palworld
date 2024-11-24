import path from "path";
import fs from "fs";
import {Creature} from "./creature.interface.ts";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const loadCreatures = (): Creature[] => {
    const filePath = path.join(__dirname, 'creatures.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileData) as Creature[];
};
const creatures = loadCreatures();

export const getCreature = (id : string): Creature | null => {
    const creature = creatures.find((creature) => creature.id === id);
    return creature ? creature : null;
}