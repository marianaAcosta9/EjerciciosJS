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

Sintaxis basica

splice(indice de inicio, cantidad de elementos a eliminar, nuevo elemento1, nuevoelemento2, etc.)

    - Indice de inicio: la posicion desde donde comenzamos a eliminar elementos(primer numero dentro del parentesis)
        - Cantidad de elementos a eliminar: numero de elementos a borrar(segundo numero del parentesis)
            - elemento a agregar: los nuevos elementos que se agregan al arreglo(tercer elemento del parentesis)

                * /

let mesesDelAnio = ["Enero", "Febrero", "Agosto", "Septiembre"];
console.log("Este es nuestro arrreglo de los meses del anio: ", mesesDelAnio);

//Eliminar datos usando splice
let mesesBorrados = mesesDelAnio.splice(2, 2, "Abril", "Mayo");
console.log("Este es el nuevo arreglo con los meses borrados: ", mesesDelAnio);

