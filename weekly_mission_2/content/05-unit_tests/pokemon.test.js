import Pokemon from './pokemon.js'

test('1) Create a new object pokemon', () => {
    const myPokemon = new Pokemon('Pikachu','electric', 10)
    expect(myPokemon.name).toBe('Pikachusss'); // Corrige esta prueba
});