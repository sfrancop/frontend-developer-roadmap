/*
Llamado de funciones

En JavaScript existe un concepto llamado hoisting que premite llamar a una
funcion antes de que esta sea declarada

JavaScript permiter llamar a una funcion y no pasarle todos sus
parametros, los argumentos sin pasar quedan asignados como
undefined
*/
miFuncion1(2, 3);
miFuncion1(2, 3, 6); // Tambien es posible asignar parametros a argumentos no definidos


/*
Declaracion de funciones
*/
// Esta es una forma
function miFuncion1(a=4, b=2){ // Por el hecho de no estar obligados a pasar todos los parametros, podemos asignar valores por defecto a los argumentos, como en python
  console.log(arguments.length); // Otra manera de acceder a la cantidad de parametros que está recibiendo
  console.log(arguments[0]) // Con arguments[<inde>] podemos acceder a los parametros pasados, esto es útil para acceder al parametro no definido en la declaración de la función
  console.log("La suma de a y b es: " + (a + b));
}
//  Esta es una forma (funcion de tipo expresion)
let miFuncion2 = function(a, b){return a+b};
console.log("La suma de a y b es: " + miFuncion2(1, 3));
// Funciones anonimas y no reutilizables
(function (a,b){
  console.log("La suma de a y b es: " + (a+b));
})(1,2);
// Funcion flecha
const miFuncion3 = (a, b) => a+b;
console.log(miFuncion3(1,2));

// Saber cuantos argumentos tiene una funcion
console.log(miFuncion1.length);

// Convertir una funcion a texto
let funcionTexto = miFuncion1.toString();
console.log(funcionTexto);