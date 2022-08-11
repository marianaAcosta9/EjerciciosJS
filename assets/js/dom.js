/* Cuando hablamos del DOM, estamos hablando de dos representaciones de nuestra página: una de ellas es la representación del código fuente (La estructura del HTML) y la otra, es la representación visual (la estructura del DOM)

Nodos:
Es la unidad más básica que puede ser modificada, que puede ser una etiqueta o element o un nodo de texto

Por ejemplo: <h1>Hola Generation</h>
En el ejemplo anterior, el "Hola Generation" es el nodo de texto

Document:
Es el nodo raiz a partir del cual se derivan todos los demás nodos. Este objeto es el que nos permite acceder a todos los elementos del DOM. Todos los nodos derivan del document. 

Element:
Son los nodos definidos por la etiqueta htlml. Por ejemplo, una etiqueta <div></div>, <h1></h1>, etc.

    <h1> //es el nodo elemento (padre)
        Hola Generation //nodo texto (hijo)
    </h1>

Text:
Es el texto que está dentro de un element o etiqueta

Atributos:
Los atributos de las etiquetas definen nodos (en JS no los vemos tal cual como nodos, sino como información asociada al nodo del tipo element).

Comentarios y otros:
Los comentarios y otros elementos como las declaraciones doctype en las cabeceras de los documentos html también se consideran nodos por que se encuentran dentro de nuestro documento. 

Con JavaScript podemos cambiar:

-Todos los elementos de HTML de una página
-Todos los atributos de la página web
-Todos los estilos CSS de la página web
-Eliminar elementos y atributos ya existentes
-Agregar nuevos elementos y atributos-
-Reaccionar a todos los elementos HTML que existen en la página
-Crear nuevos eventos HTML en la página

*/



/*SELECCIONAR ELEMENTOS
 Sirven para realizar busquedas de elementos dentro del documento

 getElementById("Elemento"): Busca elementos por el ID
 getElementsByClassName("NombreClase"): Busca elementos por el nombre de clase
 getElementByTagName("etiqueta"): Busca un elemento por su etiqueta
 getElementByName("Nombre"): Busca un elemento por su nombre

 Metodos modernos

 querySelector(): Buscar el primer elemento que coincida con el selector
 querySelectorALL(): Busca todos los elementos que coinciden con el selector


*/

//getElementById()
const elementID = document.getElementById("parrafo1");

//getElementByClassName
const elementClass = document.getElementsByClassName("parrafitos");

//getElementByTagName y ByName
const elementTag = document.getElementsByTagName("p");
const elementName = document.getElementsByName("primerparrafo");

//querySelectorAll()
const querySelectorAll = document.querySelectorAll("parrafitos");

/*
CREAR ELEMENTOS

createElement(): crea un elemento EN MEMORIA de tipo element ((div)(/div))
createComment(): Crea un nodo del tipo comentario
createTextNode(): Crea un nodo del tipo Texto
cloneNode(): Clonar un elemento
Investigar los metodos para aniadir, modificar y elimnar atributos
*/

//createElement()
const crearDiv = document.createElement("div");
const crearImagen = document.createElement("img");

//createTextNode()
const textNode = document.createTextNode("Hola a todxs, me gustan los chilaquiles verdes");

//cloneNode
const parrafoAClonar = document.createElement("p");
parrafoAClonar.textContent = "Soy un parrafo, cloname";

const parrafoClon = parrafoAClonar.cloneNode(true);// se pone true cuando se desea que se clone todo lo que hay dentro. Si no, no se pone.

const encabezadoOriginal = document.getElementById("encabezado");
const encabezadoClon1 = encabezadoOriginal.cloneNode();
const encabezadoClon2 = encabezadoOriginal.cloneNode(true);

//Metodos para añadir, modificar o eliminar atributos.

// TAREAAAAAA

/* Modificar elementos

Son metodos que nos van a permitir hacer modificaciones a nuestros elementos dentro del documento HTML

textContent: Permite mostrar el contenido en texto de un elemento
innerHTML: Permite modificar el contenido de un elemento
outerHTML: PErmite mostrar el contenido con todo y etiquetas

*/

//textContent
encabezadoClon1.textContent;
parrafo1.textContent;
parrafo2.textContent;

//innerHTML
parrafo1.innerHTML = ("Lo siento, ahora yo soy el texto del parrafo 1");

//outerHTML
encabezadoClon1.outerHTML;
parrafo1.outerHTML;

/*
INSERTAR ELEMENTOS

Son metodos que nos permiten poner la informacion que estaba en una memoria virtual de forma visual en nuestro documento

appendChild()
remove()
removeChild()
replaceChild()

*/

const appendImg = document.createElement("img");
appendImg.src = "https://cdns-images.dzcdn.net/images/artist/098ea0886f463cf48b75d2af855ad3b9/500x500.jpg";
appendImg.alt = "Imagen sorpresa";

document.body.appendChild(appendImg);

//Explicacion del codigo anterior: primero creamos un elemento (etiqueta) llamada img (existe en forma virtual), le agregamos atributos como src y alt, y por ultimo conectamos al dom usando el appendChild sobre nuestro document.body

const appendParrafo = document.createElement("p");
appendParrafo.innerHTML = ("hola, soy un parrafo hijo");
document.body.appendChild(appendParrafo);

// .remove

const borrar = document.querySelector("#parrafo2");
borrar.remove();

// otro ejemplo para borrar

const borrar2 = document.querySelector('#parrafo4').remove();

// EJERCICIO, MODIFICACION DE ESTILOS

document.getElementById("temerarios").style.color = "#FF0000";
document.getElementById("temerarios").style.fontSize = "50px";
document.getElementById("temerarios").style.fontFamily = "Arial";
document.getElementById("temerarios").style.fontWeight = "bold";
document.getElementById("temerarios").style.fontStyle= "italic";
document.getElementById("temerarios").style.textDecoration = "underline";
document.getElementById("temerarios").style.textAlign = "center";
document.getElementById("temerarios").style.textTransform = "uppercase";
document.getElementById("temerarios").style.letterSpacing = "2px";
document.getElementById("temerarios").style.wordSpacing = "2px";

/*EVENTOS 
Una forma mucho mas facil de modificar el contenido de un elemento es usando eventos. Los eventos son acciones que se puedne realizar en un elemento, para modificar los valores de los atributos, estilos, etc.

Algunos de los eventos mas comunes son:

- Cuando un usuario hace clic con el raton
- Cuando se ha cargado una pagina web
- Cuando se ha cargado una imagen
- Cuando el raton se mueve sobre un elemento
- Cuando se cambia un campo de entrada
- Cuando se envia un formualrio HTML
- Cuando un usuario pulsa una tecla


- Evento mediante HTMl (mala practica)
- Eventos mediante el DOM (HTML + JS) (mas o menos una mala practica)
- EventListener (buena practica)
  
- Evento mediante HTMl (mala practica)

Es la forma mas sencilla, pero menos recomendable, porque se ejecutan desde el HTML y no queremos mezclar JS con el HTML.


<button onclick="alert('Hola, gracias por saludarme')">SALUDAR</button>



- Eventos mediante el DOM (HTML + JS) (mas o menos una mala practica)

Es una forma alternativa de gestionar eventos, creando HTML desde la API DOM (Pero es una trampa porque seguimos usando HTML para el uso del boton)

En lugar de agregar el atributo onclick al boton, lo localizamos mediante un querySelector. Luego le asignamos una funcion con el codigo deseado, en este caso, una alerta.

const button = document.querySelector(".botonSaludo");
button.onclick =
function(){
    alert("Hola desde el JS")
}




- EventListener (buena practica)

Permite agregar una escucha del evento indicado (primer parametro), y en elcaso de que ocurra, se ejecuta la funcion asociada indicada (segundo parametro)


*/


//EVENTO DESDE JS
/*
const button = document.querySelector(".botonSaludo");
button.onclick = 
function() {
    alert("Hola desde el JS")
}
*/


//EVENTO DESDE EVENT LISTENER

const button = document.querySelector(".botonSaludo");
button.addEventListener("click", function() {
    alert("Hola, saludos con un Event Listener");
});
