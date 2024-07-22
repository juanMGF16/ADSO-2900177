let fechaNacimiento;
let fechaActual;

function edad(fechaNacimiento, fechaActual){
    let edadd;
    let consola = "";
    fechaN = fechaNacimiento;
    fechaA = fechaActual;
    edadd = fechaA - fechaN;
    consola +=`Su edad es: ${edadd}\n`;
    if(edadd >= 18){
        consola +="Es mayor de edad \n";
    }else{
        consola +="Es menor de edad";
    }
    return consola;
}

const expedad = function(fechaNacimiento, fechaActual){
    let edadd;
    let consola = "";
    fechaN = fechaNacimiento;
    fechaA = fechaActual;
    edadd = fechaA - fechaN;
    consola +=`Su edad es: ${edadd}\n`;
    if(edadd >= 18){
        consola +="Es mayor de edad \n";
    }else{
        consola +="Es menor de edad";
    }
    return consola;
}