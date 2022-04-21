const Ajolonauta = require('./../app/Ajolonauta')

describe("Prueba de unidad de ajolonauta", () => {
    test('Caso prueba 1: creacion de objeto', () => {
        //Aqui usar el codigo como lo deseas utilizar
        const woopa = new Ajolonauta("Woopa")
        // validar el resultado esperado
        expect(woopa.name).toBe("Woopa")
    }
    
    )
})