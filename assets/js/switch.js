let dia = new Date().getDay();

function evalDate(dia) {
    switch (dia) {
        case 0:
            return "Domingo";
            break; //Se indica break para que cuando ya llegue al resultado ya no siga evaluando todo lo demás
        case 1:
            return "Lunes";
            break;
        case 2:
            return "Martes";
            break;
        case 3:
            return "Miércoles";
            break;
        case 4:
            return "Jueves";
            break;
        case 5:
            return "Viernes";
            break;
        case 6:
            return "Sábado";
            break;
        default: //Se usa por si se coloca un número inválido que no esté en un case.
            return "Su fecha no es válida";
    }
}

alert(evalDate(dia));