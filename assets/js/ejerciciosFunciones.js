//Ejercicio 01
//Crear una función idCard
//Variables locales: Nombre, Ubicación y Pasatiempo.
//Return "Hola, mi nombre es ___. Vivo en ___ y disfruto ____"


let nombre = "Mariana Ramírez Acosta";
let ubicacion = "Guadalajara, Jalisco";
let pasatiempo = "comer hamburguesas.";

function idCard() {
    console.log(`Hola, mi nombre es ${nombre}. Vivo en ${ubicacion} y disfruto ${pasatiempo}`)
}

idCard();



//Ejercicio 02
//Investigar la edad de un animal en años humanos
//Función calcMascotAge
//Input- Argumento: Edad en años humanos
//Variables locales: Dato para hacer la conversión y e.g dogEquivalent=7
//Hacer operaciones necesarias
//Return: valor obtenido + mensaje opcional


let edadGato = prompt("Escribe la edad de tu gato");

function edadHumanaGato(edadGato){
  let resultado = edadGato * 5;
  return resultado;
}

console.log(edadHumanaGato(edadGato));