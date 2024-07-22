let fechaNacimiento;
let fechaActual;

function edadPersona(fechaNacimiento,fechaActual){
    fechaN = fechaNacimiento;
    fechaA = fechaActual;
    let edad;
    edad = fechaA - fechaN;
    return edad;
}
function condicion(edad){
    if(edad>17){
        return edad+" Es mayor de edad";
    }else{
        return edad+" Es menor de edad"
    }
}
function mayoriaEdad(edad){
    if(edad >= 18){
        return edad+" Estan en el promedio de mayoria de edad";
    }else{
        return edad+" No estan en el promedio de mayoria de edad"
    }
}

const expedadPersona = function(fechaNacimiento,fechaActual){
    fechaN = fechaNacimiento;
    fechaA = fechaActual;
    let edad;
    edad = fechaA - fechaN;
    return edad;
}
const expcondicion = function(edad){
    if(edad>17){
        return edad+" Es mayor de edad";
    }else{
        return edad+" Es menor de edad"
    }
}
const expmayoriaEdad = function(edad){
    if(edad >= 18){
        return edad+" Estan en el promedio de mayoria de edad";
    }else{
        return edad+" No estan en el promedio de mayoria de edad"
    }
}