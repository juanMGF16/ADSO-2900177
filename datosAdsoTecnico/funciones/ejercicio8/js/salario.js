function sueldo(diasTrabajados,valorDia){
    let sueldo;
    sueldo = diasTrabajados * valorDia;
    return sueldo;
}
function arl(sueldo){
    let rltArl;
    rltArl = sueldo * 0.052;
    return rltArl
}
function salud(sueldo){
    let rltSalud;
    rltSalud = sueldo * 0.12;
    return rltSalud
}
function pension(sueldo){
    let rltPension;
    rltPension = sueldo * 0.16;
    return rltPension
}

function pagoTotal(sueldo){
    let pensionn = pension(sueldo);
    let saludd = salud(sueldo);
    let arll = arl(sueldo);
    pagoT = sueldo - (pensionn + arll + saludd);
    return pagoT;
}


const expsueldo = function(diasTrabajados,valorDia){
    let sueldo;
    sueldo = diasTrabajados * valorDia;
    return sueldo;
}
const exparl = function(sueldo){
    let rltArl;
    rltArl = sueldo * 0.052;
    return rltArl
}
const expsalud = function(sueldo){
    let rltSalud;
    rltSalud = sueldo * 0.12;
    return rltSalud
}
const exppension = function(sueldo){
    let rltPension;
    rltPension = sueldo * 0.16;
    return rltPension
}

const exppagoTotal = function(sueldo){
    let pensionn = pension(sueldo);
    let saludd = salud(sueldo);
    let arll = arl(sueldo);
    pagoT = sueldo - (pensionn + arll + saludd);
    return pagoT;
}
