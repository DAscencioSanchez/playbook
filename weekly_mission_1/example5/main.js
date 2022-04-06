const logger = require('./logger')

// Ya se puede usar directamente el objecto instanciado en el modulo logger
logger.log('This is an informational message')

//Tambien se puede instanciar uno nuevo de esta manre

const customLogger = new logger.constructor('PERSONALIZADO')
customLogger.log('This is an informational message')