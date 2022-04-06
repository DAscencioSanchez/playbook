class Logger {
    constructor(name){
        // This es una variable para referenciar el valor del contexto local de esta clase
        this.name = name // Estas variables se le conocen como atributos.
    }

    //Metodo
    //This.name es la variable que se guarda en el contexto local
    // message es una variable que se pasa al ejecutar este metodo

    info (message){
        console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
    }

    //metodo
    verbose (message) {
        console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
    }
}

//Esta clase se exprta en ese modulo
module.exports = Logger