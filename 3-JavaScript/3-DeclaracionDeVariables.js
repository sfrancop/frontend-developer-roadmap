// Es posible declarar una variable empezando solo con su nombre,
// pero no es una buena practica
nombre = "Juan";

// La mejor formar para declarar variables es con let
let nombre2 = "Juan";

// Asignación que no cambiará en el tiempo ni es posible cambiar
const apellido = "Perez";
apellido = "Lopez"; // Esto no es posible

// Es posible declarar variables en una misma linea
let x, y;

// Es posible asignar variables en una misma linea
x = 1, y = 2;

// Js es case sensitive, como Python
let numero = 1;
let Numero = 2;

// Los nombre de las variables pueden comenzar por caracteres,
// $ o _, esto es útil para usar palabras reservadas, por ejemplo:
let _if;