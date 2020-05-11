class Pokemon {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const pokemon = new Pokemon("test");
console.log(pokemon.name);