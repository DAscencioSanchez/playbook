/*
Esto tambien es la declaracion de una funcion
module.exports hara que pedas invocar esta funcion en otro script como:

>const logger = require('./logger)

y usarla como:

>logger("Heeeey!")*/

module.exports = (message) => {
    console.log(`info: ${message}`)
}
