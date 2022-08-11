
/*

Dentro de los navegadores tenemos dos tipos de APIs:

- APIs nativas: como el DOM que es el API que nos permite acceder al codigo HTML de nuestros documentos a traves de JavaScript.

- APIs externas: Como las APIs de Twitter que nos permite obtener los ultimos tweets de usuario, o la de GitHub que nos permite obtener la informacion de los repositorios de una cuenta.

Ejemplos de APIs WEB:

-DOM
-XMLHttpRequest: Peticiones al servidor
-fetch: API nos permite hacer peticiones al servidor
-sessionStorage
-Localstorage

FETCH API

Asincronismo: Cuando le pido una torta al señor de las tortas con mucho tiempo de anticipación.

Es un pilar fundamental en JS ya que es un programa de un solo hilo, por lo que se ejecuta una sola instrucción a la vez.

Sincronismo: Cuando le pido una torta al señor de las tortas para "YA" por que tengo poco tiempo para comer.

JavaScript usa un modelo asincrono y no bloqueante, con un loop de eventos implementado en un solo hilo. 
    - Single Thread
    - Operaciones de entrada y salida
    - Bloqueo
    - No bloqueo


Ejemplo de aeropuerto

Pista de aterrizaje = hilo o thread
Input = cuando un avion va aterrizar
Output = cuando el avion tiene que despegar
Manejador de eventos = la torre de control

Gracias al asincronismo, vamos a tener una pista de aterrizaje liberada, porque no vamos a poder aterrizar dos aviones al mismo tiempo, con lo que mantenemos un flujo constante de trabajo.

*/

//Ejemplo de JavaScript sincrono

console.log ("Inicio Sincrono");
function dosSincrono () {
    console.log("Dos");
}
function unoSincrono(){
    console.log("Uno");
    dosSincrono();
    console.log("Tres");
}
unoSincrono();
console.log("Fin de Sincrono");

//Ejemplo de JavaScript asincrono

console.log ("Inicio de Asincrono"); // esto se ejecuta primero
function dosAsincrono() {
    setTimeout(function(){
        console.log("Dos"); //esto se ejecuta en quinto lugar por que tiene tiempo de 2 segundos o 2000 milisegundos
    }, 2000);
}
function unoAsincrono(){
    setTimeout(function(){
        console.log("Uno"); //esto se ejecuta en cuarto lugar pues tiene tiempo 0
    }, 0);
    dosAsincrono();
    console.log("Tres"); // esto se ejecuta en segundo lugar pues no tiene tiempo establecido
}
unoAsincrono();
console.log("Fin de Asincrono"); // esto se ejecuta en tercer lugar por que no tiene tiempo establecido 

//Se imprime primero lo que no tiene tiempo definido (console log) y luego lo que tiene un tiempo definido en orden de menor a mayor. Se imprime entonces INICIO DE ASINCRONO, TRES, FIN DE ASINCRONO, UNO Y DOS en ese orden

/* Ejemplos de tareas asincronas

- Fetch a una URL para obtener un archivo JSON
- Tareas programadas con setTimeout
- Spotify, al momento de reproducir

Mecanismos asincronos en JS

Para controlar la asincronia en JS podemos usar alguno de estos mecanismos:

- Callback

- Promesas Es algo que en principio no sabemos si se cumplirá por que pueden pasar muchas cosas. La gran ventaja de usar promesas es poder usar una sola función que haga todo el trabajo, que el código sea más estilizado y poder manejar de mejor forma los dos escenarios posibles: si la promesa se cumple o no. Una promesa es el resultado de la operación asíncrona, este resultado es en forma de objeto el cual puede estar disponible ahora o en el futuro. Aunque esta operación puede finalizar exitosamente o fallar, la promesa nos permite saber cuando una operación finaliza, independientemente del resultado. 
Las promesas tienen 3 estados posibles:
   - Pending: Estado inicial, cuando se crea la promesa
   - Fulfilled: Cuando la operación asíncrona se completa con éxito (resolved).
   - Rejected: La operación asíncrona falla (reject).
Nuestras promesas tienen algunos métodos:
    -Then (function resolve): Ejecuta la función resolve cuando la promesa se cumple. 
    -Catch (function resolve): Ejecuta la función reject cuando la promesa no se cumple. 
    -Then (function resolve, function reject): Ejecuta las dos funciones resolve y reject.
    -Finally (function end): Ejecutar la función end si se cumple o no la promesa.


- Async/await

*/

//Ejemplo de promesa para saber el nombre

let nombre = "Mariana";

const promesaDelNombre = new Promise((resolve, reject) => {
    if (nombre !== "Mariana") reject("Error!! El nombre no es Mariana");
    resolve(nombre);
});
console.log(promesaDelNombre);

//Promesa de Amor donde nos dejan en visto un ratito y luego nos aceptan la invitacion

let promesaDeAmor = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve ("Si quiero salir contigo, te amo");
    }, 5000);
});

promesaDeAmor.then(function(valor){
    console.log(valor);
});

console.log(promesaDeAmor);

// Ejemplo de promesa para ir por unas tortas

let decision = "NO";

const promesaTortas = new Promise((resolve,reject) => {
    if (decision !== "Si") reject("No, no me gustas, no quiero ir contigo por tortas");
    resolve(decision);
});

console.log(promesaTortas);


// POKEMON


/*

EXPLICACION FETCH API

Fetch API

Es el nombre de una nueva API (nativa) para JS con la cual podemos realizar
peticiones HTTP asincrionas utilizando promesas, y de forma que el codigo sea
un poco mas sencillo y legible. La forma de utilizar una peticion fetch
es sencilla, solo debemos llamar a fetch y pasarlo por parametro una URL
de la peticion a realizar


*/

//const solcitud = fetch('la url que vamos a consultar')
//Se cuarda en una cte llamada solicitud, la consulta que hago a una pagina externa



//MANDAR A LLAMAR LA API A TRAVES DE FETCH
fetch('https://pokeapi.co/api/v2/pokemon/rattata').then(response => {
    return response.json();
}).then(info =>{
    console.log("El nombre de nuestro pokemon es: ", info.name , "y su numero es: ", info.id);
});


EXPLICACION:
//fetch('https://pokeapi.co/api/v2/pokemon/rattata').then(datos =>{ : realizamos la peticcion a la URL del API pokemon, cuando te conectes al servidor, ejecutamos la siguiente funcion
//}).then(datos =>{, return datos.json();  : traeme todos los pokemon, y como se que los traes en texto, yo los convierto a formato JSON
//cuando la promesa se resuelve, entoncces ejecutamos esta funcion: }).then(info =>{ Usamos el metodo then para obtener la variable llamada info. Gracias a esta variable, puedo almacenar la info de mi pokemon y sacar de ahi los datos que necesite



/*

NOTA ESPECiAL PARA MARIANA

En la URL https://pokeapi.co/api/v2/pokemon/, despues de la ultima /, anota el nombre de algun pokemon dentro de la API, 
puede ser charizard, rattata o bulbasaur, por ejemplo.

Cuando se ejecute en la consola, te va a arrojar la info que se solicita
de acuerdo al pokemon que escribes.

Por cierto, si usas Google Chrome, Adal paso esta extension muy buena para leer
texto JSON, te dejo la URL:

https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh
Ya nadamas es de agregarla y te deberia de ordenar el formato de una forma
mas comoda para leer

P.D. disculpa la falta de tildes, mi teclado esta en ingles jajajajaja


*/


//FUNCION PARA BUSCAR INFO DENTRO DE LA API DE MANERA MAS SENCILLA Y OPTIMIZADA
function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(respuesta => respuesta.json())
    .then(dato => console.log(dato));
}
fetchPokemon(25);

/*Creamos una funcion que nos servira para agilizar la busqueda de informacion dentro
de la API Pokemon

fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`): Mandamos a llamar a la API a traves
de su URL (nota importante: las comillas con las que se encierra la URL son estas ``)

.then(respuesta => respuesta.json()): aqui asignamos que respuesta nos leera el texto en 
formato JSON

.then(dato => console.log(dato)); aqui le decimos a la funcion que el programa imprima
el dato que le solicitamos

fetchPokemon(25): este es un ejemplo, puedes cambiar el numero, depende del numero que se
introduzca, es la informacion que obtendremos de un Pokemon en especifico, en este caso
Pikcachu

*/


// async/await
async function fetchPokemon2(id){
    // fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    // .then(respuesta => respuesta.json())
    // .then(dato => console.log(dato));
    //LO ANTERIOR ES LO MISMO QUE LAS SIGUIENTES TRES LÍNEAS. 

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const datos = await response.json();

    console.log(`Pokemon llamado ${datos.name}`);
}

//version arrow function
const fetchPokemon3 = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const datos = await response.json();
    console.log(`Pokemon llamado ${datos.name}`);
}

//test
const fetchPokemon4 = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const datos = await response.json();
    document.getElementById("pokemon-img").src = datos.sprites.front_default;
    document.getElementById("pokemon-name").innerText = datos.name;
}

let id = 1;
setInterval(() => {
    fetchPokemon4(id);
    id++;
    if (id > 20) { //Esto se pone para que tenga un limite y vuelva a empezar
        id = 1;
    }
}, 2000);
// fetchPokemon4(810);

//agregar un boton cambiar y al dar clic que pida que ingreses un numero y luego cambiar pokemon.


 // //Solicitud GET 
    // fetch("https://fakestoreapi.com/products/10") //realizamos la peticion a una URL
    // .then((datos) => {
    //   //cuando la promesa es resuelta, entonces ejecutamos esta funcion
    //   return datos.json(); //convertimos la respuesta a un formato JSON
    // })
    // .then((info) => {
    //   //cuando la promesa es resuelta, entonces ejecutamos esta funcion. Estamos usando el metodo .then para obtener la respuesta de la promesa y guardarla en la variable info. Gracias a esto podre obtener la informacion que queremos.
    //   console.log(
    //     "El nombre de nuestro producto es:",
    //     info.title,
    //     " y su precio es: ",
    //     info.price
    //   ); //imprimimos el nombre del producto. esto es posible por que la respuesta ya esta en formato JSON, y podemos acceder a los datos directamente, especificando el nombre del campo que queremos.
    // });


    
    //Solicitud POST para enviar informacion
    fetch('https://fakestoreapi.com/products',{
            method:"POST", //por default es GET, para cambiarlo debemos especificar el metodo
            body:JSON.stringify(//como la informacion que voy a manejar es un objeto, necesito convertirlo a un texto (string)
            
            //cuerpo de la solicitud    
                {
                    title: 'Chettos Naranjas',
                    price: 3.0,
                    description: 'Deliciosos Chettos Naranjas',
                    image: 'https://i.pravatar.cc',
                    category: 'jewelery'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))


        //Solicitud POST para enviar informacion
    fetch('https://fakestoreapi.com/products',{
        method:"POST", //por default es GET, para cambiarlo debemos especificar el metodo
        body:JSON.stringify(//como la informacion que voy a manejar es un objeto, necesito convertirlo a un texto (string)
        
        //cuerpo de la solicitud    
            {
                title: 'Cacahuates',
                price: 3.0,
                description: 'Deliciosos Cacahuates Saladitos',
                image: 'https://i.pravatar.cc',
                category: 'jewelery'
            }
        )
    })
        .then(res=>res.json())
        .then(json=>console.log(json))