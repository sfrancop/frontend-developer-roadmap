// String
var nombre = "Sergio";

// Number 
var numero = 1000;
// Los decimales tambien son de tipo number
var numeroDecimal = 1000.1;

// Object
// Cada llave es una propiedad del objeto
var objeto = {
    nombre: "Sergio",
    apellido: "Hidalgo",
    telefono: "123456789"
};
// Null tambien es de tipo object (ausencia de valor)
var y = null;
// Los arreglos también lo son
var autos = ["BMW", "Audi", "Volvo"];

// Boolean
var verdadero = true;
var falso = falso;

// Function
function miFuncion() {}
// Una clase es también una function
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// Symbol
var simbolo = Symbol("mi simbolo");

// Undefined (Variable que no ha sido inicializada)
var x;
// Tambien se puede directamente indicar que es unefined
x = undefined;

// Para saber el tipo de dato de una variable se usa typeof
console.log(typeof miFuncion);