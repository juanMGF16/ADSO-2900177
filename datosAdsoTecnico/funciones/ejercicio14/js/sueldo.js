function sueldo(diasTrabajados,valorDia){
    let sueldo;
    sueldo = diasTrabajados * valorDia;
    return sueldo;
}
function modifSueldoTransporte(sueldo, salarioMinimo){
    let salarioM = salarioMinimo;
    let subTrans;
    if(sueldo <= salarioM * 2 ){
        subTrans = 140000
    }
    else{
        subTrans = 0;
    }

    return subTrans;
}
function modifSueldoRetencion(sueldo, salarioMinimo){
    let salarioM = salarioMinimo;
    let retencion;
    let valorDeducion = 0.04;
    if(sueldo >= salarioM * 4){
        retencion = sueldo * valorDeducion; 
    }else{
        retencion = 0; 
    }
    return retencion
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
    let subsidio = modifSueldoTransporte(sueldo);
    let reten = modifSueldoRetencion(sueldo);
    let pagoT = (sueldo + subsidio) - (pensionn + arll + saludd + reten);
    return pagoT;
}

const expmodifSueldoTransporte = function(sueldo, salarioMinimo){
    let salarioM = salarioMinimo;
    let subTrans;
    if(sueldo <= salarioM * 2 ){
        subTrans = 140000
    }
    else{
        subTrans = 0;
    }

    return subTrans;
}
const expmodifSueldoRetencion = function(sueldo, salarioMinimo){
    let salarioM = salarioMinimo;
    let retencion;
    let valorDeducion = 0.04;
    if(sueldo >= salarioM * 4){
        retencion = sueldo * valorDeducion; 
    }else{
        retencion = 0; 
    }
    return retencion
}
const exppagoTotal = function(sueldo){
    let pensionn = pension(sueldo);
    let saludd = salud(sueldo);
    let arll = arl(sueldo);
    let subsidio = modifSueldoTransporte(sueldo);
    let reten = modifSueldoRetencion(sueldo);
    let pagoT = (sueldo + subsidio) - (pensionn + arll + saludd + reten);
    return pagoT;
}