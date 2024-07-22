const salarioM = 1300000;

function sueldo(diasT, valorD) {
    let sueldo = diasT * valorD;
    return sueldo;
  }
  function modifSueldoTransporte(sueldo){
    let subTrans;
    if(sueldo <= salarioM * 2 ){
        subTrans = 140000
    }
    else{
        subTrans = 0;
    }

    return subTrans;
}
function modifSueldoRetencion(sueldo){
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



function mandar() {
    let diasTrabajados = document.getElementById('txtDiasT').value;
    let valorDia = document.getElementById('txtValorD').value;

    if(diasTrabajados && valorDia){
        let sueldoP = sueldo(diasTrabajados, valorDia);
        let subsidio = modifSueldoTransporte(sueldoP);
        let reten = modifSueldoRetencion(sueldoP);
        let pensionn = pension(sueldoP);
        let saludd = salud(sueldoP);
        let arll = arl(sueldoP);
        let pagoT = pagoTotal(sueldoP);
      
        document.getElementById('salida').innerHTML = `Su sueldo es: ${sueldoP} </br>
        Su subsidio de transporte es: ${subsidio} </br>
        Su retención es: ${reten} </br>
        Su pensión es: ${pensionn}  </br>
        Su salud es: ${saludd} </br>
        Su arl es: ${arll} </br>
        Su pago total es: ${pagoT} </br>`;
    }else{
        document.getElementById('salida').innerHTML = "Digite datos validos"
    }
  
   
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('click', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()