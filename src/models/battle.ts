import Pokemon from './pokemon';

class Battle {
    constructor(public p1: Pokemon, public p2: Pokemon) {}

    attackFirst(p1: Pokemon, p2: Pokemon): boolean {
        const attackFirst: boolean = p1.speed >= p2.speed;
        const attackingFirst: string = (attackFirst) ? p1.name : p2.name;

        console.log(`${attackingFirst} attaque en premier !`);
        return attackFirst;
    }

    attack(p1: Pokemon, p2: Pokemon): void {
        p2.life -= 1;
    }

    fight(p1: Pokemon, p2: Pokemon): Pokemon {
        // Determining who's attacking and whose attacked
        let attacking: Pokemon = (this.attackFirst(p1, p2)) ? p1 : p2;
        let attacked: Pokemon = (attacking === p1) ? p2 : p1;

        while ((p1.life > 0) && (p2.life > 0)) {
            // Attack
            this.attack(attacking, attacked);

            // Changing role
            let tmpP: Pokemon = attacking;
            attacking = attacked;
            attacked = tmpP;
        }

        // Displaying and returning the winner
        let winnerP = (p1.life > 0) ? p1 : p2;
        console.log(`${winnerP.name} a gagné le combat`);
        return winnerP;
    }
}

export default Battle