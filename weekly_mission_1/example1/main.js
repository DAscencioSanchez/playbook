// 1. Creacion de un objeto con propiedades

let myCar = new Object(); //creacion de un objeto
myCar.make = 'Ford'; //guardar valor dentre del objeto creado
myCar.model = 'Mustang'; 
myCar.year = 1969; 

console.log(myCar) // imprimir el objeto

// 2. Declaracion de un objeto con variables locales y publicas

const myModule = (() => {

// Variables de contexto local
    const privateFoo = "Soy un valor privado, solo me usan en este objeto"
    const privateBar = [1,2,3]
    const baz = "Soy un valor que va a ser expuesto"
// Variables para guardar variables locales 
    const exported = {
        publicFoo : "Valor publico, pueden verme desde donde me llamen",
        publicBar : "Otro valor publico",
        publicBaz : baz
    }

//Exposicion de variables locales
return exported

})()

console.log(myModule)