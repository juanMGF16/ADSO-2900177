let registro = [];
let totalRegistro = [];
let iteracion;
let consola = "";
let salario;
let salarioMinimo = 1300000;

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
function mandar(){
    let cedula = document.getElementById('txtCedula').value;
    let nombres = document.getElementById('txtNombres').value;
    let apellidos = document.getElementById('txtApellidos').value;
    let edad = document.getElementById('txtEdad').value;
    let estrato = document.getElementById('txtEstrato').value;
    let valorDia = document.getElementById('txtValorD').value;
    let diasTrabajados = document.getElementById('txtDiasT').value;

    if (!cedula || !nombres || !apellidos || !edad || !estrato || !valorDia || !diasTrabajados) {
        alert("Por favor, complete todos los campos del formulario.");
        return;
    }

    registro.push({
        cedula: cedula,
        nombres: nombres,
        apellidos: apellidos,
        edad: edad,
        estrato: estrato,
        valorDia: valorDia,
        diasTrabajados: diasTrabajados
    });

    document.getElementById('txtCedula').value = "";
    document.getElementById('txtNombres').value = "";
    document.getElementById('txtApellidos').value = "";
    document.getElementById('txtEdad').value = "";
    document.getElementById('txtEstrato').value = "";
    document.getElementById('txtValorD').value = "";
    document.getElementById('txtDiasT').value = "";

    totalRegistro = [];

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
    
    let tablaHTML = '<table border="1">';
    tablaHTML += '<tr><th>Cédula</th><th>Nombres</th><th>Apellidos</th><th>Edad</th><th>Estrato</th><th>Valor por día</th><th>Días Trabajados</th><th>Salario</th><th>Subsidio de transporte</th><th>Bono</th><th>Salud</th><th>Pensión</th><th>ARL</th><th>Retención</th><th>Pago Total</th></tr><tbody>';

    let idUser = 0;
    totalRegistro.forEach(empleado => {
        tablaHTML += '<tr>';
        tablaHTML += `<td>${empleado.cedula}</td>`;
        tablaHTML += `<td>${empleado.nombres}</td>`;
        tablaHTML += `<td>${empleado.apellidos}</td>`;
        tablaHTML += `<td>${empleado.edad}</td>`;
        tablaHTML += `<td>${empleado.estrato}</td>`;
        tablaHTML += `<td>${empleado.valorDia}</td>`;
        tablaHTML += `<td>${empleado.diasTrabajados}</td>`;
        tablaHTML += `<td>${empleado.salario}</td>`;
        tablaHTML += `<td>${empleado.personaTransporte}</td>`;
        tablaHTML += `<td>${empleado.personaBono}</td>`;
        tablaHTML += `<td>${empleado.personaSalud}</td>`;
        tablaHTML += `<td>${empleado.personaPension}</td>`;
        tablaHTML += `<td>${empleado.personaArl}</td>`;
        tablaHTML += `<td>${empleado.retencionPersona}</td>`;
        tablaHTML += `<td>${empleado.pagoTotalPersona}</td>`;
        tablaHTML += `<td><i class='fa-solid fa-pen-to-square'></i></td>`;
        tablaHTML += `<td><i class='fa-solid fa-trash updateUser' data-id-user="${idUser}"></i></td>`;
        
        tablaHTML += '</tr>';
        idUser++;
    });

    tablaHTML += '</tbody></table>';

    document.getElementById('cuerpoTabla').innerHTML = tablaHTML;
    
}


let dataEditor = document.querySelectorAll('.updateUser'); 

