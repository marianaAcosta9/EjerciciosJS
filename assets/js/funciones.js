// 1. Utilizar keyword function
// 2. Nombrar nuestra función
// 3. Utilizar () y abrir y cerrar la función

// Mejores Prácticas: Simplificar funciones lo más posible.

function myFunction() {
    //Aquí va el cuerpo de la función
    console.log("Hola Mundo")
}

//Después de que se declara, se invoca la función:
myFunction();


//Ejemplo2, segunda función
function myName() {
    console.log("Marianita")
}

myName();

function scopeFunction() {
    let local = "Esto está dentro de la función";
    console.log(local);
}

scopeFunction();

let nombre = "mariana rmz";
function globalScope() {
    console.log(nombre);
}

globalScope();

//Scope de variables:

//LET
//Scope global, local

//VAR
//Sope global, local
//Hoisting: no se puede utilizar o invocar antes de declarar

//CONST
//Scope global, local
//No se puede modificar