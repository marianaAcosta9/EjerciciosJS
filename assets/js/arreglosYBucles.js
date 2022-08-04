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

equiposDeFutbol = ["America", "Barcelona", "MachesterCity", "PSG", "ACMilan", "Tigres", "Pueblita", "Ajax", "Bayern", "RealMadrid" ];

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

En los arreglos tenemos ciertos métodos o instrucciones que nos van a permitir manipular los elementos de este arreglo. Estos nos permiten desde agregar y eliminar elementos, hasta reaordenarlos */