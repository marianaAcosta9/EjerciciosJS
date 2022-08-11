let valorContador = 0; //iniciamos nuestra variable en 0
//asignar la funcion incrementar mediante add Event Listener
const botonIncrementar = document.querySelector("#incrementar");
botonIncrementar.addEventListener("click", function() {
    valorContador++;
    document.getElementById("contador").innerHTML = valorContador;  
});

//Asignar la funcion decrementar con un add event listener pero mandando llamar la funcion que se hizo previamente
function decrementar(){
    valorContador--;
    document.getElementById("contador").innerHTML = valorContador;
}
const botonDecrementar = document.querySelector("#decrementar");
botonDecrementar.addEventListener("click", decrementar);

// Ejecutar la funcion desde HTML
function resetear(){
    valorContador=0;
    document.getElementById("contador").innerHTML = valorContador;
}
