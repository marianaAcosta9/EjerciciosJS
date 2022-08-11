/* APIS DE ALMACENAMIENTO WEB

La API de almacenamiento web define dos mecanismos de almacenamiento que son muy importantes

- almacenamiento local
- almacenamiento de sesiones

Tanto el almacenamiento local como el de sesiones proporcionan un área privada para sus datos, esto quiere decir que otros sitios web no pueden acceder a esta información.

Algunas caracteristicas que comparten el local y el session storage son:

    - La capacidad (5Mb a diferencia de los 4Kb de las cookies)
    - La informacion es almacenada en pares clave/valor, por lo que se puede usar como si fueran variables.
    - El almacenamiento web solo es accesible en el navegador, no se envia al servidor como lo hacen las cookies.

ALMACENAMIENTO LOCAL (LocalStorage)

La informacion almacenada con localStorage se guarda indefinidamente hasta que sea eliminada mediante codigo o bien borrada desde el navegador.

El almacenamiento local es similiar a las cookies, pero se borra con menos frecuencia y puede almacenar mas datos. Por lo tanto, se puede utilizar en situaciones similares, tales como: almacenar articulos que un usuario de comercio electronico agrego a un carrito, almacenar historial de uso, etc.

La informacion que almacenamos en localStorege se elimina hasta que se haga explicitamente, ya sea por nostros o por el usuario. Nunca se limpia automaticamente y se comparte en todas las sesiones que acceder al sitio.

ALMACENAMIENTO DE SESION (SessionStorage)


La informacion que guardamos en sessionStorage solo se guarda durante la sesion del navegador (es decir, se elimina cuando se cierra el navegador). Si tenemos varias ventanas o pestañas abiertas, la informacion se guarda en cada una de ellas, asi que si cerramos una ventana, la informacion se borra de la misma.

Cómo accedemos al almacenamiento:

window.localStorage
windows.sessionStorage

*/

//Guardar datos (localStorage)

//La sintaxis para guardar datos en un localStorage es: localStorage.setItem(key,value);, donde key es la clave (o el identificador) y value es el valor que queremos guardar.

localStorage.setItem("Nombre","María");
localStorage.setItem("Apellido","Ramírez");
localStorage.setItem("Edad", 30);
localStorage.setItem("Es programador?", true);

//Si pusiéramos varios localStorage de Nombre, se sobreescriben. La manera para que no se sobreescriban es poner por ejemplo Nombre1, para que lo detecte como una variable distinta.

/*
Recuperar datos
(localStorage.getItem(key, value))

La sintaxis para obtener un dato de localStorage es:
localStorage.getItem(key); donde key es la clave o identificador que queremos recuperar
*/

let recuperarNombre = localStorage.getItem("Nombre");
console.log(recuperarNombre);

let recuperarApellido = localStorage.getItem("Apellido");
console.log(recuperarApellido);

// Remover o borrar datos de localStorage (local.Storage.removeItem(key))

localStorage.removeItem("Nombre:", "María");

//Conocer el largo de nuestro almacenamiento (localStorage.length)

let longitudLocalStorage = localStorage.length;
console.log(longitudLocalStorage);

//Limpiar datos del localStorage (localStorage.clear())

localStorage.clear();

//agregar elementos con sessionStorage

sessionStorage.setItem("Gatita","Kari");