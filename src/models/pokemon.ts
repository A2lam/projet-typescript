import PokemonInterface from '../interfaces/pokemon';

class Pokemon implements PokemonInterface {
    constructor(public name: string, public life: number, public speed: number) {}

    attackFirst(p2: Pokemon): boolean {
        const attackFirst: boolean = this.speed >= p2.speed;
        const attackingFirst: string = (attackFirst) ? this.name : p2.name;

        console.log(`${attackingFirst} attaque en premier !`);
        return attackFirst;
    }

    attack(p2: Pokemon): void {
        p2.life -= 1;
    }
}

export default Pokemon;