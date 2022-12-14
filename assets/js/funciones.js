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

//console.log(a);
//let a = "Hoisting let";

//VAR
//Sope global, local
//Hoisting: no se puede utilizar o invocar antes de declarar

//console.log(x);
//var x = "hola";

//CONST
//Scope global, local
//No se puede modificar

//console.log(c);
//const c = "Hoisting const";

//ejemplo de Input

//Se declara primero la variable global
const grito = "AAaaaaaAAAaaa";

function fiuFiu(x) {
    console.log(x);
}

fiuFiu(grito);
fiuFiu("mariana ramírez acosta");
fiuFiu(2);

function dosParametros(x,y) {
    console.log(x);
    console.log(y);
}

dosParametros("Hola","Qué tal?");


//Ejemplo de Output

function out() {
    let x = "Hi"
    return x;
}

console.log(out());

//Opción 2

const receive = out();

console.log(receive);

//Segundo ejemplo de Output
    //Función con parámetro y return

function areaRectangulo(b,a) {
    var resultado = b * a;
    return resultado;
}

console.log(areaRectangulo(6,3));

//Tercer ejemplo de Output

function areaTriangulo(b,h) {
    var resultado = b * h / 2;
    return resultado;
}

console.log(areaTriangulo(8,4));

//Con las comillas hacia atrás permite concatenar dos variables en automático

var a = "hola";
var b = "Mundo";
console.log(`Hola ${b}`);


//Ejercicio 01
//Crear una función idCard
//Variables locales: Nombre, Ubicación y Pasatiempo.
//Return "Hola, mi nombre es ___. Vivo en ___ y disfruto ____"