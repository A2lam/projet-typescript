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
}

export default Battle