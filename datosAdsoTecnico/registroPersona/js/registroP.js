let registro = [];
let totalRegistro = [];
let iteracion;
let consola = "";
let salario;
let salarioMinimo = 1300000;


registro = [
    {cedula:1077723426, nombres:'Karol Natalia', apellidos:'Osorio', edad:17, estrato:1, valorDia:40000, diasTrabajados:30},
    {cedula:1075793094, nombres:'Brayan Santiago', apellidos:'Gerrero', edad:17, estrato:1, valorDia:35000, diasTrabajados:30},
    {cedula:1080291867, nombres:'Ingrid', apellidos:'Medina', edad:17, estrato:2, valorDia:85000, diasTrabajados:30},
    {cedula:1075225114, nombres:'Yerson', apellidos:'Rubiano', edad:18, estrato:1, valorDia:55000, diasTrabajados:30},
    {cedula:1077724121, nombres:'Camilo Andres', apellidos:'Lozada Ramirez', edad:17, estrato:5, valorDia:375000, diasTrabajados:30},
    {cedula:2344211135, nombres:'Jesus Fernando', apellidos:'Carvajal Anacona', edad:17, estrato:6, valorDia:555000, diasTrabajados:30},
    {cedula:1084866876, nombres:'Maria Isabel', apellidos:'Tovar', edad:17, estrato:3, valorDia:250000, diasTrabajados:30},
    {cedula:1084922863, nombres:'Mauricio', apellidos:'Noscue', edad:17, estrato:3, valorDia:175000, diasTrabajados:30},
    {cedula:1077724270, nombres:'Isabela', apellidos:'Carrera Cabrera', edad:17, estrato:4, valorDia:455000, diasTrabajados:30},
    {cedula:1130024111, nombres:'Juan Manuel', apellidos:'Gutierrez Fierro', edad:17, estrato:4, valorDia:555000, diasTrabajados:30},
];
function subTransporte(sueldo){
    let subTrans;
    if(sueldo < salarioMinimo * 2){
        subTrans = 165000; 
    }else{
        subTrans = 0;
    }
    return subTrans;
}
function bono(sueldo){
    let bonoo
    if(sueldo <= salarioMinimo && registro[iteracion].estrato == 1 || sueldo <= salarioMinimo && registro[iteracion].estrato == 2){
        bonoo = 1000000;
    }else{
        bonoo = 0;
    }
    return bonoo
}
function retencion(sueldo){
    let reten
    if(sueldo > salarioMinimo *8 && registro[iteracion].estrato == 6){
        reten = sueldo * 0.05;
    }else if(sueldo > salarioMinimo * 6){
        reten = sueldo * 0.04;
    }else if(sueldo > salarioMinimo * 4){
        reten = sueldo * 0.03;
    }else{
        reten = 0;
    }
    return reten
}
function arl(sueldo){
    let arll;
    arll = sueldo * 0.052;
    return arll
}
function pension(sueldo){
    let rltPension;
    rltPension = sueldo * 0.16;
    return rltPension
}
function salud(sueldo){
    let rltSalud;
    rltSalud = sueldo * 0.12;
    return rltSalud
}
function pagoTotal(sueldo){
    let pensionn = pension(sueldo);
    let saludd = salud(sueldo);
    let arll = arl(sueldo);
    let subsidio = subTransporte(sueldo);
    let bonoo = bono(sueldo);
    let reten = retencion(sueldo);
    let pagoT = (sueldo + subsidio + bonoo) - (pensionn + arll + saludd + reten);
    return pagoT;
}
for(iteracion=0;iteracion<registro.length;iteracion++){
    salario = registro[iteracion].diasTrabajados * registro[iteracion].valorDia;

    personaTransporte = subTransporte(salario);
    personaBono = bono(salario);
    retencionPersona = retencion(salario)
    personaArl = arl(salario); 
    personaPension = pension(salario);
    personaSalud = salud(salario);
    pagoTotalPersona = pagoTotal(salario);
    totalRegistro.push({
        cedula:registro[iteracion].cedula, 
        nombres:registro[iteracion].nombres, 
        apellidos:registro[iteracion].apellidos, 
        edad:registro[iteracion].edad,
        estrato:registro[iteracion].estrato, 
        valorDia:registro[iteracion].valorDia, 
        diasTrabajados:registro[iteracion].diasTrabajados, 
        salario, personaTransporte, personaBono, personaSalud, 
        personaPension, personaArl, retencionPersona, pagoTotalPersona});
}

// console.log(registro);
console.table(totalRegistro);

// registro.forEach(data => {
//     salario = data.valorDia * data.diasTrabajados
//     if(salario < 2600000){
//         subTransporte = 165000; 
//     }else{
//         subTransporte = 0;
//     }
//     if(data.estrato == 1 && data.estrato == 2){
//         bono = 1000000;
//     }else{
//         bono = 0;
//     }
//     consola += `Su cedula es: ${data.cedula}\n`
//     consola += `Su nombre es: ${data.nombres}\n`
//     consola += `Su apellido es: ${data.apellidos}\n`
//     consola += `Su edad es: ${data.edad}\n`
//     consola += `Su estrato es: ${data.estrato}\n`
//     consola += `El valor del dia Trabajado es: ${data.edad}\n`
//     consola += `Dias Trabajados: ${data.edad}\n`
//     consola += `Su salario es: ${salario}\n`
//     consola += `-------------------------------------------\n`
// });