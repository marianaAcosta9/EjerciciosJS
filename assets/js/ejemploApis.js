function guardarDatos(){
    localStorage.nombre = document.getElementById("nombre").value; //se necesita especificar que es value para que traiga solo el valor y no el formulario completo.

    localStorage.password = document.getElementById("password").value;

    document.getElementById("datos").innerHTML=("Datos guardados correctamente");
}

function recuperarDatos(){
    if(localStorage.nombre != undefined && localStorage.password != undefined){
        document.getElementById("datos").innerHTML= `Nombre: ${localStorage.nombre}, Password: ${localStorage.password}`
    } else{
        document.getElementById("datos").innerHTML=("No has introducido tu nombre ni tu password!");
    }
}