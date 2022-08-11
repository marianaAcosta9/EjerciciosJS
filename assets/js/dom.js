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

Métodos de selección de elementos

Son elementos que nos van a permitir seleccionar uno o varios elementos del DOM. Estos métodos se utilizan en el document, por que se agrega antes del get.

*/

//A continuación como ejemplo de cómo agregar texto por medio de JS a una etiqueta que ya está establecida en index.html

//let parrafo = "Hola Generation";
//let parrafo2 = document.getElementById("parrafo");
const cambioDeParrafo = document.getElementById("parrafo2").innerHTML = "Quiero Chilaquiles"; //innerHTML nos permite introducir información dentro del HTML