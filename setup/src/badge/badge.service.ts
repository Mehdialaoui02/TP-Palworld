import {Badge} from "./badge.interface";
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const loadBadges = (): Badge[] => {
    const filePath = path.join(__dirname, 'badges.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileData) as Badge[];
};

const badges = loadBadges();

export const getBadge = (id : number): Badge | null => {
    const badge = badges.find((badge) => badge.id === id);
    return badge ? badge : null;
}


