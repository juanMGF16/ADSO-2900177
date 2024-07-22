/*
funcion porcentaje
autor: Juan M. Gutierrez
fecha: 24 de junio de 2024
*/
function operar(){
    let numero = parseInt(document.getElementById('txtNumero').value);
    
    if(numero){
        let resulatdo;
        let consola = "";

        resulatdo = numero / 100;
        consola += `<div class="respuesta">`;
        consola += `El porcentaje del Número es: <strong>${resulatdo}</strong>`;
        consola += `</div>`;

        document.getElementById('operacion').innerHTML = consola;
    }else{
        // alert("Por favor ingrese un número");
        document.getElementById('operacion').innerHTML = "Digite datos validos";
    }
    
    return false
}