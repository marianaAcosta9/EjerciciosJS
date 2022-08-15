/*

*Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa

Elementos de la Programacion Orientada a Objetos

    - Clases: Plantilla que nos sirve para crear objetos. 
    - Objetos: Elementos creados a partir de la plantilla.
    - Propiedades o atributos: Informacion que tiene un elemento.
    - Metodos o funciones: Lo que hacen y como lo hacen. (accines que puede realizar)
    - Constructores: Son quienes construyen al objeto tomando en cuanta a la plantilla
    - Instanciar: Crear o materializar el objeto.
    

Ejemplo de los gatitos:

    - Mama y papa gatitos: Clase
    - Gatitos bebes: Objeto
    - Color de los gatitos: Atributos o caracteristicas
    - Maullar y ronronear: Metodos o funciones
    - Tener un gatito para darle todo nuestro amor: Instanciacion o materializacion


Ejemplo de las casas:
    
    - Plano de la casa: Clase o plantilla
    - Casitas: Objetos
    - Cantidad de niveles que hay en una casa: atributos
    - Abrir estacionamiento: Metodo o funcion
    - Personal de construccion: Constructores
    - Tener la casa lista para vivir: Instanciacion o materializacion


*/

const felix = {
  nombre: "Félix",
  color: "Naranja",
  peso: "10 kg",
  edad: "5 años",
  colorOjos: "verdes",
  raza: "Fold Escocés",
  sexo: "hembra",
  vacunas: true,
  numeroBigotes: 20,
  tipoPelo: "largo",
  manchas: true,
};

console.log(felix);
console.log(felix.nombre);
console.log(felix.raza);

//PLANTILLA PARA CREAR MUCHOS GATITOS

//1. Defino mi plantilla con las propiedades como variables para después agregar valores
class gatito {
  nombre = "";
  color = "";
  edad = 0;
  raza = "";
  //3. crear un constructor dentro de la clase
  constructor(nombre, color, edad, raza) {
    this.nombre = nombre; //this (este o esto): Nos va a indicar el lugar donde estamos (ciudad o en el campo). Necesitamos saber que esta palabra es reservada, y nos ayuda a saber el aqui y el ahora.Hace referencia a la clase en la questamos, y los objetos que estamos creado.
    this.color = color;
    this.edad = edad;
    this.raza = raza;
  }

  //2. Defino mis métodos como FUNCIONES, por que con esas funciones podemos realizar acciones
  
maullar(maullar) {
    maullar = console.log("Miau");
  }
  
dormir(dormir) {
    dormir = console.log("ZZzzzzz...");
  }
  
ronronear(ronronear) {
    ronronear = console.log("rrrrrrrrr");
  }

}

// 4. crear gatitos

let kitty = new gatito ("Kitty", "blanco", 666, "japonés");
let garfield = new gatito ("Garfield", "anaranjado", 20, "persa");
let sofi = new gatito ("Sofía", "gris", 2, "persa");
let kari = new gatito ("Kari", "cálico", 4, "corriente");
let olivia = new gatito ("Olivia", "carey", 4, "súper corriente");

console.log(kitty);
console.log(garfield);
console.log(sofi);

kitty.maullar();
garfield.dormir();
sofi.ronronear();
