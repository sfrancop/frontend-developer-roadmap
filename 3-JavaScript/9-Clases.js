/*
La diferencia de las clases a los objetos es que las clases son plantillas para
crear objetos, mientras que los objetos son instancias de una clase. Todas las
clases son objetos.

Para las clases no aolica el concepto de hoisting, por lo que primero se debe
declarar la clase y luego utilizarla.
*/ 

/*
Para crear una clase se utiliza la palabra reservada class seguida del nombre
de la clase, que se recomienda que comience con mayuscula
*/
class Persona {
    // Metodo constructor
    constructor(nombre, apellido) {
        // Definimos las propiedades del objeto
        this._nombre = nombre;
        this._apellido = apellido;
    }

    // Metodo get
    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    // Metodo
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }
}

/*
Instancias una clase (crear un objeto)
*/ 
let juanPerez = new Persona('Juan', 'Perez'); 

/*
Llamar a métodos get y set (no se utilizan parentesis)
*/
console.log(juanPerez.nombre);
juanPerez.nombre = 'Juan Carlos';
console.log(juanPerez.nombre);