/*
Dentro de las siguientes estructuras se pueden usar palabras
reservadas similares a las que existen a python como los son
break, continue y return

En terminos de estructuras de control también existen las etiquetas
que se usan para poder redirigir la ejecución a una parte
especifica del programa, pero no es recomendable
*/

// La estructura de un condicional es igual a la de java
let numero = 3; 
if(numero === 1){
    console.log("El numero es 1");
}
else if(numero === 2){
    console.log("El numero es 2");
}
else{
    console.log("El numero es 3");
}

/*
Switch

Esta estructura hace comparaciones estrictas, por lo tanto, el
argumento debe ser del mismo tipo de dato a los valores comparados
*/ 
switch(numero){
    case 1: // En una misma de estas lineas se pueden agregar mas casos para hacer un tipo de or, por ejemplo: case 1: case 2: case 3:
        console.log("El numero es 1");
        break;
    case 2:
        console.log("El numero es 2");
        break;
    default:
        console.log("El numero es 3");
        break;
}

/*
While

Tiene la misma estructura que en java
*/ 
let contador = 0;
while(contador < 10){
    console.log(contador);
    contador++;
}

/*
Do while
*/ 
contador = 0;
do{
    console.log(contador);
    contador++;
} while(contador < 0);

/*
For

Tiene la misma estructura que en java
*/ 
for(let contador = 0; contador < 10; contador++){
    console.log(contador);
}