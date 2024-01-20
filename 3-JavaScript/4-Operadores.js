/*
Los operadores arimeticos son los mismos que existen en Python,
en especial, también se encuentran % para modulo, ** para
potencia, += para incremento y en general <operador>=.

También existen ++ para incremento y -- para decremento como Java.
*/

let a = 1;
/*
Pre incremento (lo mismo aplica para el decremento)

Primero se incrementa el valor de a, se guarda  y ese mismo 
resultado se le asigna a b 

En este caso a y b terminan con el numero 2
*/
let b = ++a;
console.log(a);
console.log(b);

// Es posible hacer operaciones como la siguiente
let c = ++a + b--;

a = 1;
/*
Post incremento (lo mismo aplica para el decremento)

Primero se asigna el valor de a a b, y luego se incrementa
a y se actualiza su valor 

En este caso a termina con 2 y b con 1
*/
b = a++;
console.log(a);
console.log(b);

/*
Igualdad

Compara los valores sin importar el  tipo de dato, solo el
contenido
*/
console.log("3"==3);

/*
Igualdad estricta

Compara los valores dando prioridad al tipo de dato, es decir, si
de entrada el tipo de dato de los elementos comparados es
diferente, retorna falso
*/
console.log("3"===3);
console.log("3"==="3");

/*
Desigualdad

Compara los valores sin importar el  tipo de dato, solo el
contenido
*/
console.log("3"!=3);

/*
Desigualdad estricta
*/
console.log("3"!==3);
console.log("3"!=="3");

// AND
console.log(true && true);

// OR
console.log(true || false);

/*
Operador ternario

<Condicion booleana> ? <Resultado para true> : <Resultado para false>
*/
let resultado = 1>2 ? "Verdadero" : 0;
console.log(resultado);

// Conversión de string a number
let miNumero = "10";
let numero = Number(miNumero);
console.log(typeof numero);

// Verificar si una variable no es number
console.log(isNaN(miNumero));
let cadena = "18x";
console.log(isNaN(cadena));