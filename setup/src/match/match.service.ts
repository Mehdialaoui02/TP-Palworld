import {Creature} from "../creature/creature.interface.ts";
import {MasterTrainer} from "../masterTrainer/masterTrainer.interface.ts";

enum STATE {
    created = 'created',
    ongoing = 'ongoing',
    finished = 'finished',
}

class Round {
    number : number;
    state : STATE;
    winner : string;
    creatures : ( Creature | null )[];

    constructor(number : number, creatures : (Creature | null)[]) {
        this.number = number;
        this.state = STATE.ongoing;
        this.winner = '';
        this.creatures = creatures;
    }

    public playRound(): 0 | 1 {
        console.log('Playing Round');
        const [creature1, creature2] = this.creatures;
        if (!creature1 || !creature2) {
            throw new Error('Creature cannot be empty');
        }
        const score1 = creature2.stats.health / ((creature1.stats.attack * 100) / (100 + creature1.stats.defense))
        const score2 = creature1.stats.health / ((creature2.stats.attack * 100) / (100 + creature2.stats.defense))

        console.log(`${creature1.name} Score: ${score1}`);
        console.log(`${creature2.name} Score: ${score2}`);

        // Determine the winner
        if (score1 >= score2) {
            this.winner = creature1.id;
            this.state = STATE.finished;
            console.log(`${creature1.name} wins the round!`);
            return 0;
        } else {
            this.winner = creature2.id;
            this.state = STATE.finished;
            console.log(`${creature2.name} wins the round!`);
            return 1;
        }

        // Update the state of the round
    }
}

export class MatchService {
    state: STATE;
    trainers: MasterTrainer[];
    start: string;
    end: string | null;
    winner: MasterTrainer | null;
    round: Round | null;
    currentScore: { trainer1: number, trainer2: number };

    constructor(trainers: MasterTrainer[]) {
        if (trainers.length !== 2) {
            throw new Error('Only two players are allowed in a match');
        }
        this.trainers = trainers;
        this.state = STATE.created;
        this.start = new Date().toISOString();
        this.end = null;
        this.winner = null;
        this.round = null;
        this.currentScore = { trainer1: 0, trainer2: 0 };
    }

     public startMatch(): void {
        if (this.state !== STATE.created) {
            throw new Error("Match can only be started in the 'created' state.");
        }
        this.state = STATE.ongoing;
        const [trainer1, trainer2] = this.trainers;
        for (let i = 0; i < 5; i++) {
            const round = new Round(1, [trainer1.creatures[0], trainer2.creatures[0]])
            this.round = round;
            const winner = round.playRound();
            if (winner) {
                this.currentScore.trainer1 += 1
            }
            else {
                this.currentScore.trainer2 += 1
            }
        }
        this.winner = this.currentScore.trainer1 > this.currentScore.trainer2 ? trainer1 : trainer2
        this.state = STATE.finished;
    }
}
