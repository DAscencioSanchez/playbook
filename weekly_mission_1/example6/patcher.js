/*
*Ten en cuenta:
    require('./logger') nos da el objeto creado
    require('./logger').Logger nos regresa la clase
En este caso estamos agregando una funcion mas al objeto instanciado, no a la clase    
*/

require('./logger').customMessage = function () {
    console.log('This is a new functionality')
}