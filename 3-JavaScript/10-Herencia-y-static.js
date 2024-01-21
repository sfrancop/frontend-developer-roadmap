/*
Todas las clases extienden de la clase Object, por lo que heredan sus metodos
y por lo tanto pueden ser sobreescritos.
*/

// Clase padre
class Persona {

    // Atributos estaticos
    static contadorPersonas = 0;

    // Definir atributos para los objetos sin necesidad de declararlos en el constructor
    email = "undefined";

    // Metodo constructor
    constructor(nombre, apellido) {
        // Definimos las propiedades del objeto (se usa '_' para indicar no confundir con los metodos get y set)
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorPersonas++;
    }

    // Metodos get
    get nombre() {
        return this._nombre;
    }

    get apellido() {
        return this._apellido;
    }

    // Metodos set

    set nombre(nombre) {
        this._nombre = nombre;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    // Metodo
    saludar() {
        return(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }
}

// Clase hija (hereda de Persona usando extends)
class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido); // Llama al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    // Sobreescritura de metodos
    saludar() {
        return `Hola, me llamo ${this.nombre} ${this.apellido} y trabajo en el departamento ${this.departamento}`;
    }

    // Se puede llamar a otros metodos de la clase padre usando super
    saludarPadre() {
        return super.saludar() + " y trabajo en el departamento " + this.departamento;
    }

    // Metodo estatico
    static saludar2() {
        return 'Hola, soy un metodo estatico';
    }

}

// Instanciamos un objeto de la clase Empleado
let juanPerez = new Empleado('Juan', 'Perez', 'Sistemas');
console.log(juanPerez.saludar()); 
console.log(juanPerez.saludarPadre());
console.log(juanPerez.email);

// Uso de metodo estatico
// console.log(juanPerez.saludar2());  Error, no se puede llamar a un metodo estatico desde un objeto
console.log(Empleado.saludar2());// Se llama al metodo estatico desde la clase

// Acceder a los atributos estaticos
console.log(Empleado.contadorPersonas);
console.log(Persona.email); // Los atributos de objetos no se pueden acceder desde la clase