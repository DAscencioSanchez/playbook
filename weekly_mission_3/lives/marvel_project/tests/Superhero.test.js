const SuperHero = require("../app/Superhero")

describe("Test Suite for superhero", () => {
    test('Case 1: get a superhero',  () => {
        const ironman = new SuperHero("Iron Man", "Tony Stark","Robert Downey Jr.")
        expect(ironman.name).toBe("Tony Stark")
        expect(ironman.heroName).toBe("Iron Man")
        expect(ironman.actor).toBe("Robert Downey Jr.")
        
    });
})