// Formas de inicializar un array
let autos = new Array("BMW", "Mercedes", "Volvo"); // Esta forma es antigua y ya no se recomienda
let carros = ["BMW", "Mercedes", "Volvo"];

/*
Para acceder a los elementos de un array se hace de la misma forma que en python
con las listas, por medio del indice
*/
console.log(autos[0]);

/*
Para acceder modificar los elementos de un array se hace de la misma forma que
en python con las listas, por medio del indice
*/
autos[0] = "Audi";
console.log(autos[0]);

// Insertar elementos al final de un array
autos.push("Ford"); // Esta es la forma más tradicional
autos[autos.length] = "Chevrolet"; // Esta es otra forma de hacerlo
autos[6] = "Ferrari"; // También es posible tener elementos vacios en la lista
console.log(autos);

// Saber si el elemento es un arreglo. Estas son dos formas de hacerlo:
console.log(Array.isArray(autos));
console.log(autos instanceof Array);