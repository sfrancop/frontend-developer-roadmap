/*
Un objeto es un tipo de datos no primitivo que puede contener propiedades y
métodos
*/

/*
Declaración de un objeto

Se hace conmo un diccionario en Python
*/
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    profesion: 'Desarrollador Web',
    edad: 32
}
// También se puede hacer de esta forma
const persona3 = new Object();
persona3.nombre = 'Carlos'; 
// O de esta
const otroObjeto = {};

/*
Acceder a los atributos de un objeto
*/
// Forma 1
console.log(persona["nombre"]);
// Forma 2
console.log(persona.apellido);
// Con un for in
for (atributo in persona){
    console.log(`${atributo}: ${persona[atributo]}`);
} 

/*
Modificar los atributos de un objeto

Los atributos de un objeto pueden ser modificados asi la variable sea constante
*/ 
persona.edad = '123456789';
console.log(persona.edad);

/*
Metodos getters y setters

Estos metodos son una mejor practica para acceder y modificar los atributos de
un objeto
*/
const persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    profesion: 'Desarrollador Web',
    edad: 32,
    get nombreCompleto() { // Estos métodos también pueden recibir parametros
        return `${this.nombre} ${this.apellido}`;
    },
    set nombreCompleto(nom) {
        const palabras = nom.split(' ');
        this.nombre = palabras[0];
        this.apellido = palabras[1];
    }
}
console.log(persona4.nombreCompleto);
persona4.nombreCompleto = 'Carlos Lopez';
console.log(persona4.nombreCompleto)

/*
Crear objetos con metodos
*/ 
const persona2 = {
    nombre: 'Juan',
    apellido: 'Perez',
    profesion: 'Desarrollador Web',
    edad: 32,
    mostrarInfo: function() {
        return(`${this.nombre} es ${this.profesion}`);
    }
}
console.log(persona2.mostrarInfo());

// Agregar atributos a un objeto
persona.correo = "juan@gmail.com";
console.log(persona.correo);

// Eliminar atributos de un objeto
delete persona.correo;

// Objeto a arreglo
let personaLlavesArray = Object.keys(persona);
console.log(personaLlavesArray);
let personaValoresArray = Object.values(persona);
console.log(personaValoresArray);

// Objeto a string
console.log(JSON.stringify(persona));

/*
Crear instancias de un objeto
*/ 
// Primero se define el constructor
function Persona(nombre, apellido, email){
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.getNombreCompleto = function(){
    return this.nombre + ' ' + this.apellido
  }
}
// Creacion de la instancia
let padre = new Persona("Jose", "Ignacio", "joseignacio@gmail.com");
console.log(padre.getNombreCompleto());
let madre = new Persona("Maria", "Fernanda", "maria@gmail.com");
console.log(madre.getNombreCompleto());

/*
Agregar un atributo a todas las instancias
*/ 
Persona.prototype.edad = undefined;
padre.edad = 43;
console.log(madre.edad);
console.log(padre.edad);

/*
Método call

Sirve para llamar a un método de un objeto desde otro objeto.

En este ejemplo, aunque el método getNombreCompleto no existe en la instancia
de persona, se puede llamar a este método desde la instancia de padre gracias
al método call.
*/ 
console.log(padre.getNombreCompleto.call(persona));

/*
Método apply

sirve para llamar a un método de un objeto desde otro objeto.
*/
console.log(padre.getNombreCompleto.apply(persona));