import PokemonInterface from '../interfaces/pokemon';

class Pokemon implements PokemonInterface {
    constructor(public name: string, public speed: number) {}

    attack(p2: Pokemon): string {
        return (this.speed > p2.speed) ? this.name : p2.name;
    }
}

export default Pokemon;