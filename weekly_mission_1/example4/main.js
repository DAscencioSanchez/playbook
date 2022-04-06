const Logger = require('./logger') // invocamos el modulo que contiene esta clase

//Creacion de un objeto
const dbLogger = new Logger("DB") //creamos un objeto nuevo, esto se llama por default el constructor de la clase

//invocacion del metodo
dbLogger.info('This is an informational message')

//Creamos otro metodo
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')