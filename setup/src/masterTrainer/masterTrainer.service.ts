import path from "path";
import fs from "fs";
import {parsedTrainer} from "./masterTrainer.helper.ts";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const addCreatureToTrainer = (creatureId: string, trainerId: number): void => {
    const filePath = path.join(__dirname, 'trainers.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const parsedTrainers = JSON.parse(fileData) as parsedTrainer[];
    parsedTrainers.map((trainer: parsedTrainer) => {
        if (trainer.id === trainerId) {
            if (!(trainer.creatures.includes(creatureId))) {
                trainer.creatures.push(creatureId);
            }
        }
    })
    fs.writeFileSync(filePath, JSON.stringify(parsedTrainers, null, 2));
}

export const buyCreature = (trainerId : number, creatureId): void => {
    // Add a store database and the price to creatures
    // Add the money to master trainer
    // Implement this function
}