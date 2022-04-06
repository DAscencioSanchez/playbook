class Logger {
    constructor(name) {
        // Al crear este objeto se guardaran estos valores
        this.count = 0
        this.name = name
    }

    log(message) {
        this.count++ // aumenta el contador en 1 al llamar este metodo
        console.log('[' + this.name + ']' + message)
    }
}

module.exports = new Logger('DEFAULT') // se exporta y se le da un valor predeterminado