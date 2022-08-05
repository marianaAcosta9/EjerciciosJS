/*
Arrays o arreglos 

UN arreglo o array es un conjunto de datos que se pueden almacenar en una sola variable.

Cuando tenemos una variable, la usamos para almacenar un solo dato.

En cambio, en un arreglo, guardamos MUCHOS datos a manera de lista.

Un array, ya no es un tipo de dato primitivo, se considera un objeto por que es una estructura de datos


let nombre = "Mariana";

array = ["Felipe", "Ivonne", "Briana", "Alonso"];

arrayAnimalitos = ["Felipe", 23, true, null, undefined]

Formas para crear un array

1. Primera forma

Utilizando la palabra reservada "new Array"

var marcaDeColores = new Array("Mapita", "Prismacolor", "Blancanieves", "Crayola");

2. Segunda forma

Esta forma es la más usada para crear arreglos en JS

var marcaDeColores2 = ["Mapita", "Prismacolor", "Blancanieves", "Crayola"];
*/

//Ejemplos

listaDePerritos = ["Chihuahua", "Criollo", "Callejero", "Mestizo"];

console.log(listaDePerritos);


razasGatos = ["Persa", "Siamés", "Esfinge", "Maine Coon", "Bengala", "Himalayo", "Savannah", "Angora", "Azul ruso", "Bombay"];

listaDePeliculas = ["Jarhead", "Angela's Ashes", "The departed",
    "In Brudges", "Sunshine", "Tokyo Drift"];

equiposDeFutbol = ["America", "Barcelona", "MachesterCity", "PSG", "ACMilan", "Tigres", "Pueblita", "Ajax", "Bayern", "RealMadrid"];

estadosDeLARepublicaMexicana = ["Jalisco", "Nayarit", "NuevoLeon", "Coca", "Durango", "Colima", "Queretaro", "QuintanaRoo", "Yucatan", "Zacatecas", "Aguascalientes"];

seriesParaMaratonear = ["Breaking Bad", "Better Call Saul", "The Boys", "Stranger Things", "The Office"];

tiposTe = ["rojo", "marroqui", "canela", "Hinojo", "Menta", "Manzanilla", "jengibre", "blanco", "azul",];

/* Acceder a los elementos de un array

Antes de querer mostrar los elementos de un arreglo, hay que definir algunas cosas:

1. Posición de los elementos, donde empezamos a ennumerar desde el 0 y estas posiciones se llaman índices

Ejemplo: Posición de los elementos de la lista del súper:
0: "Leche"
1: "Papitas"
2: "Huevos"
3: "Nachos"

El número de elementos NO ES LO MISMO que su posición.

Esto sirve para mostrar sólo un elemento de la lista, por ejemplo, si queremos imprimir el elemento papitas de la listaDelSuper, se imprime así:

console.log(listaDelSuper[1]); 

o:

console.log("El producto en la posición 1 es :" + listaDelSuper[1]);

Encontramos que al tratar de seleccionar un elemento de nuestro que no existe, aparecera el mensaje undefined. Esto es porque la gran ventaja que tienen los arreglos en JS es que podemos crecer su tamanio cuando nosotros queramos. Para esto, el arreglo se prepara por si en algun momento recibe mas informacion.

Array Asociativo

Son arreglos donde cada elemento está asociado no sólo con su índice, sino que también está asignado a un identificador.

Sintaxis:
*/

let propiedadesDeMiComputadora = {
    marca: "Asus",
    procesador: "Intel Core i7",
    ram: "16 GB",
    almacenamiento: "1 TB",
    precio: "15000",
}

console.log(propiedadesDeMiComputadora);
console.log("La RAM de mi computadora es de", propiedadesDeMiComputadora["ram"]);
console.log("La marca de la computadora que elegiste es", propiedadesDeMiComputadora["marca"], ", y su precio es de", propiedadesDeMiComputadora["precio"]);

let publicacionRedSocial = {
    nombre: "Felipe",
    usuario: "@felipecontenis",
    fecha: "viernes",
    likes: "5000",
    descripcion: "Esta es la foto de una lasagna",
    ubicacion: "Estado de México",
}

console.log("Estas son las publicaciones de Agosto:", publicacionRedSocial["fecha"]);

/* MÉTODOS DE LOS ARRAYS

En los arreglos tenemos ciertos métodos o instrucciones que nos van a permitir manipular los elementos de este arreglo. Estos nos permiten desde agregar y eliminar elementos, hasta reaordenarlos

Podemos dividir estos métodos en 3:

- Métodos transformadores: Permiten transformar nuestro arreglo
- Métodos accesorios: permiten acceder a nuestro arreglo
- Métodos repetitivos: Permiten recorrer el arreglo y hacer algo en específico con él.

*/

let arrayDeEjemplo = ["Manzanas", "Peras", "Mangos", "Mandarinas", "Uvas", "Sandía", "Fresas"];

console.log("Este es nuestro arreglo original de 7 elementos", arrayDeEjemplo);

//Métodos transformadores

//push(): Agrega un elemnto al final del arreglo

arrayDeEjemplo.push("Pitaya");

console.log("Agregamos la Pitaya a nuestro arreglo de ejemplo:", arrayDeEjemplo);

//pop(): Permite eliminar el último elemento de la regla

arrayDeEjemplo.pop();

console.log("Eliminamos el último elemento del arreglo de ejemplos:", arrayDeEjemplo);

//unshift(): Agregamos uno o más elementos al inicio del arreglo

arrayDeEjemplo.unshift("Plátanos", "Tunas", "Aguacate", "Lichi");

console.log("Agregamos 4 elementos al principio del arreglo:", arrayDeEjemplo);

//shift(): Elimina el primer elemento del arreglo

arrayDeEjemplo.shift();

console.log("Eliminamos el primer elemento del arreglo", arrayDeEjemplo);

//sort(): Permite ordenar los elemntos del arreglo de forma ascendente

arrayDeEjemplo.sort();

console.log("Ordenamos ascendentemente el arreglo de ejemplo:", arrayDeEjemplo);

//reverse(): Invertimos el orden del arreglo

arrayDeEjemplo.reverse();

console.log("Invertimos el orden del arreglo", arrayDeEjemplo);

//slice(): Extraemos una sección del arreglo o cadena, y devuelve una cadena nueva, copiando el arreglo (no se modifica nada, sino que creamos una copia)

let saludo1 = "Hola, estoy aprendiendo arreglos en Generation";
let saludo2 = saludo1.slice(3, 7);
console.log("Imprimimos la rebanada del arreglo original", saludo2);

/*Sintaxis basica

splice(indice de inicio, cantidad de elementos a eliminar, nuevo elemento1, nuevoelemento2, etc.)

    - Indice de inicio: la posicion desde donde comenzamos a eliminar elementos(primer numero dentro del parentesis)
        - Cantidad de elementos a eliminar: numero de elementos a borrar(segundo numero del parentesis)
            - elemento a agregar: los nuevos elementos que se agregan al arreglo(tercer elemento del parentesis)

*/

let mesesDelAnio = ["Enero", "Febrero", "Agosto", "Septiembre"];
console.log("Este es nuestro arrreglo de los meses del anio: ", mesesDelAnio);

//Eliminar datos usando splice
mesesBorrados = mesesDelAnio.splice(2, 2, "Abril", "Mayo");
console.log("Este es el nuevo arreglo con los meses borrados: ", mesesDelAnio);

//Agregar elementos sin borrar nada del arreglo

let diasSemana = ["Lunes", "Martes", "Miércoles"];
console.log("Los días de la semana son:", diasSemana);

diasSemana.splice(3, 0, "Jueves", "Viernes", "Sábado");
console.log("Los nuevos días de la semana son:", diasSemana);


//MÉTODOS ACCESORES

//length: Nos dice cuántos elementos tenemos en nuestro arreglo


let ensalada = ["Jitomate", "zanahoria", "lechuga", "chícharos", "cebolla"];

console.log("Tenemos estos elementos en el arreglo ensalada", ensalada.length);

//join(): Nos permite unir los elementos del arreglo en una cadena de texto 

console.log("Esta es una feliensalada:", ensalada.join(" feli"));

//concat(): NOs permite unir dos o más arreglos en uno solo. Y devuelve un nuevo arreglo con los elmeentos de los otros arreglos. 

let dulces = ["galletas", "chetos", "glorias", "gansitos", "picafresas", "tamborines", "galletas"];

let mezcla = ensalada.concat(dulces);

console.log("Esta es mi mezcla:", mezcla);

//indexOf(): Nos permite saber la posición de un elemento dentro de un arreglo

console.log("Esta es la posición de los chetos en mi arreglo dulces:", dulces.indexOf("chetos"));

//lastindexOf(): Nos permite saber la última posición de un elemento determinado dentro de un arreglo

console.log("La última posición de las galletas es ", dulces.lastIndexOf("galletas"));

//toString(): Convertir un arreglo a una línea de texto
console.log(mezcla.toString());

//valueOf(): El valor de un elemento
console.log(mezcla.valueOf());

//includes(): Para saber si un elemento existe dentro del arreglo 
console.log("Así podemos saber si un elemento está dentro del arreglo ", mezcla.includes("cacahuates"));

/* Métodos Repetidores
filter (): Recorre el array y devuelve uno nuevo con los elementos que cumplan la condición (bucle).
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Numeros del 1 al 10", numeros);

let numeros1a15 = numeros.filter(numeros => numeros < 5);
console.log("Estos son losnúmeros que cumplen la condición de ser menores a 5", numeros1a15);

let numerosDel6al9 = numeros.filter(numeros => (numeros > 5 && numeros < 10));
console.log("Estos son los números que son mayores que 5 y menores que 10", numerosDel6al9);

//map (): permite recorrer el arreglo, modificar los elementos presentes en él y retornar esos valores modificados en uno nuevo con la misma longitud que el arreglo original. 

let map = numeros.map(numeros => numeros * 3);
console.log("Estos son los numeros multiplicados por 3", map);

// Ejercicio improvisado de tablas del 1 al 10

let arregloBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let tabla2 = arregloBase.map(arregloBase => arregloBase * 2);
console.log("Esta es la tabla del 2", tabla2);

let tabla3 = arregloBase.map(arregloBase => arregloBase * 3);
console.log("Esta es la tabla del 3", tabla3);

/* forEach(): Este método nos permite llamar a una función "callback" específica una vez por cada elemnto sobre el que se itera del array. Al igual que otros iteradores como el map o el filter, este método recibe algunos parámetros:

- Elemento actual: Elemento del arreglo que se va a evaluar o sobre el que se hace la iteración.

- Índice: Posición que tiene el elemento dentro del arreglo.
- Arreglo objetivo: Es el arreglo por el cual se está haciendo esta iteración

ESTE MÉTODO NO CAMIA EL ARREGLO ORIGINA, DEVUELVE UNO NUEVO CON LOS ELEMENTOS MODIFICADOS
*/

// Ejemplo para remover el primer número impar de un arreglo

let listaNumeros = [3, 6, 8, 10, 12];
let impar = 3;

listaNumeros.forEach(function (numero) {
    if (numero === impar) {
        listaNumeros.shift();
    }
});

console.log("Imprime la lista de números aplicando la función de quitar el número impar", listaNumeros);


// BUCLES 


/*Bucles

En JS, los bucles o loops son utilizados para realizar tareas repetitivas con base en una condición. Las condiciones normalemente devuelven un true o false al ser evaluados, además de que el bucle continuará ejecutándose hasta que la condición devuelva un false.

Normalmente tenemos 3 ciclos
    1. While (mientras)
    2- Do while (hacer mientras)
    3. For (para)

Tenemos otras sentencias más específicas:

    1. for in: Sirve para recorrer un arreglo y por cada uno de los elementos de este arreglo obtenemos LA POSICIÓN
    2. for off: sirve para recorrer un arreglo y por cada uno de los elementos de este arreglo obtenemos SU VALOR.

 */


/*

Sentencia WHILE (mientras)

Esta sentencia nos va a permitr recorrer un bloque de codigo SIEMPRE que se cumpla una condicion especifica, donde el resultado debe ser true

la estructura de WHOLE es:

palabraReservada while (condicion que tiene que ser true) {
    //codigo a ejecutar
}


EJEMPLO DE PROGRAMA PARA SUMAR NÚMEROS

*/

/* ALERTA, ESTE PROGRAMA EXPLOTA LA COMPUTADORA

let numeroParaSumar = 0;
while (numeroParaSumar <10){
    console.log("El número es menor a 10");
}
*/

let valorInicial = 0; //Declaramos un valor inicial en 0
while (valorInicial < 5) { //Mientras el valor inicial sea menor a 5
    valorInicial++; //ejecutamos este bloque de código (sumar 1)
    console.log(valorInicial); //Imprimimos los resultados
}


//La sentencia while se ejecuta mientras se sigan obteniendo resultados positivos (true), y hasta que el resultado sea false, se para.

//Práctica grupal: Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla todos los números impares (desde 1 hasta ese número).

let numeroInicial = 1
let numeroFinal = prompt("Escribe un número entero positivo");

while (numeroInicial <= numeroFinal) {
    if (numeroInicial % 2 != 0) {
        console.log(numeroInicial);
    }
    numeroInicial ++;
};

/* Ingresamos un 5

Nuestro número inicial vale 1
Entonces dividimos 1 entre 2. El residuo es diferente de 0? Sí
Entonces se imprime
Posteriormente se le suma 1 al número que se tenía
Ahora el número inicial es 2.

Nuestro número inicial es 2
Entonces dividimos 2 entre 2. El residuo es diferente de 0? No
Entonces NO se imprime. 
Posteriormente se le suma 1 al número que se tenía (2)
Ahora el número inicial es 3.

Nuestro número inicial vale 3
Entonces dividimos 3 entre 2. El residuo es diferente de 0? Sí
Entonces se imprime
Posteriormente se le suma 1 al número que se tenía
Ahora el número inicial es 4.