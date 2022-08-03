//const nineros = false;
//const hambre = true;

//alert(nineros == hambre); //es igual a (comparación)

//alert(nineros || hambre); //OR Una u otra condición se debe cumplir 

//alert(nineros && hambre); //AND todas las condiciones se deben cumplir

// AND
// Todas las condiciones deben ser true
// true && true  => true
// true  && false => false
// false && false => false


// OR
// Solo una condicion debe ser true
// true || true = true
// true || false = true
// false || false = false

// NOT
// Es la negación a la condición
// true => false, false => true

//let a = 2;

// Escribir a += 2; es como si se pusiera a = a + 2; 
//por lo que se suman 2 al valor declarado arriba de a

//a += 2;
//a -= 1; //Esto es para restar

//Si ejecutamos un if para que se ejecute un código, sólo se va a ejecutar si la condición es TRUE. 
//La sintaxis es la siguiente:

//if (condition) {
//bloque de código que se va a ejecutar si la condición es TRUE
//}

//let hora = 8;

//if (hora == 8) { //Si se quisiera poner si es diferente se hace con !=
//    alert("Buen dia");
//}



//Otro ejemplo con otro tipo de variable

//let hambre = true;

//if (hambre == true) {
//    alert("Tengo mal del puerco");
//} else {
//    alert("Voy a mimir");
//}
//ejemplo de horario
//let hour = 20;

//if (hour < 18) {
//    alert("Good day");
//} else {
//    alert("Tardes, ya");
//}

//ejemplo edad

//let edad = 17;

//if (edad >= 18) {
//    alert("Crear cuenta");
//} else {
//    alert("Bai bai");
//}

//Ejemplo concatenar instrucciones y también if

//let hora = -1;

//if (hora > 0) {
//    if (hora <= 7 && hora > 0) {
//        alert("buenas madrugadas");
//    } else {
//        alert("Que tenga un buen día");
//    }
//} else {
//    alert("su hora no existe");
//}

//Ejemplo

var nineros = 5;

if(nineros <= 10) {
    alert("Concha de Vainilla y 4 picafresas");
} else if (nineros <= 50) {
    alert("Tacos de canasta");
} else if (nineros <= 129) {
    alert("pizza de Liru sisa");
} else if (nineros <= 500) {
    alert("Boneless y cerveza")
} else {
    alert("Compra 3 casas, renta 2 y vive en una");
}