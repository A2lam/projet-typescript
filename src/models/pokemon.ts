import PokemonInterface from '../interfaces/pokemon';

class Pokemon implements PokemonInterface {
    constructor(public name: string, public life: number, public speed: number) {}
}

export default Pokemon;