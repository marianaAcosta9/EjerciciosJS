//Mejores practicas
//camelCase: Utilizar mayusulas en la mitad de nuestras variables, ejemplo: marianaVariableUno

//Palabras reservadas
//No usar palabras reservadas para declarar una variable
// if, return, true, false, for, while, let, var, etc...

//var while;
//var null ;
//var if;
//var true;
//var false;
//var var;
//var const;
//var let;

// Seguir un standard personal

// Normalizar datos que se van a ingresar

var tel = "+52 448 234 1212"; //En el caso de teléfono sería mejor declarar la variable como string en vez de número. Para poder colocar el signo +

//Pueden contener numeros, letras, guion bajo, simbolo de dolar
var a;
var a1;
var a_nombre;
var a$Direccion;

//Declaracion de variables
// Numero

var edad = 24;
var peso = 78;
var miopia = 3;
var astigmatismo = 3;

//Type Boolean
var ciego = true;
var hambre = false;
var bateria = false;
var ia = true;

//Type String
var nombre = "Mariana Ramirez";
var ciudad = "Guadalajara";
var nacionalidad = "mexicana";

//Type null
var ganasDeVivir = null;
var briAmonestaciones = null;

//Variables declaradas con un mismo valor
var x, y, z = 4;

//Variables undefined
var xx, yy, zz;

var uno = dos = tres = 4;


//Tarea, escribir en una sola linea variables de carrito de compras
var queso, cereal, jamon, pan, leche;

let carritoDeCompras = {
    queso: 4,
    cereal: 2,
    jamon: 5,
    pan: 20,
    leche: 1,
}

//Ejercicio, variables de cada tipo de dato

//Number

var edad = 30;
var añoNacimiento = 1991;
var peso = 57;
var diaNacimiento = 2;
var mesNacimiento = 12;
var añoNacimientoHermana = 1983;
var añoNacimientoHermano = 1978;
var pesoPerro = 8;
var pesoGato = 5;
var edadGato = 3;

//Boolean

var hambre = true;
var sueño = true;
var enojo = false;
var cansancio = true;
var tristeza = false;
var ruido = false;
var silcencio = true;
var ejercicio = false;
var atencion = true;
var interes = true;

//String

var nombre = "Mariana";
var apellidoPaterno = "Ramírez";
var apellidoMaterno = "Acosta";
var ciudad = "Guadalajara";
var estado = "Jalisco";
var pais = "México";
var domicilio = "Ontario #1025";
var colonia = "Italia Providencia";
var comidaFavorita = "Hamburguesas";
var nombreGatos = "Kari, Sofía y Olivia";

//Convertir números en String

let x = 123;

String(x) + "<br>" +
    String(123) + "<br>" +
    String(100 + 23);

// varios tipos para definir variables

var hola; //javascript viejo
let hola; //javascript nuevo
const hola; //variables constantes (no cambian)

// Array Es para declarar varios elementos
// Si son varios elementos de una misma clase, se declaraban así:

let carro1 = "BMW";
let carro2 = "Mazda";
let carro3 = "Audi";

// Es más fácil declararlos así (array):

const carros = ["BMW", "Mazda", "Audi"];

const carritoCompras = ["Leche", "Tortillas", "Mango", "Maruchan", "Aguacate", "Sandia", "Queso", "Sabritas", "Oreo", "Piña", "Chachitos", "Pollo", "Jamon", "Harina", "Mantequilla", "Chocolate", "Wafflera Plaza Sesamo", "Nutella", "Fresas", "Servilletas", "Xbox Series X"];

const combinacion = [1, "Hola", null, "5"];



