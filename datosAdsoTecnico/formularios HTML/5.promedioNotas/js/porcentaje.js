/*
funcion Promedio
autor: Juan M. Gutierrez
fecha: 24 de junio de 2024
*/
function operar(){
    let nota1 = parseFloat(document.getElementById('txtNota1').value);
    let nota2 = parseFloat(document.getElementById('txtNota2').value);
    let nota3 = parseFloat(document.getElementById('txtNota3').value);
    
    if(nota1 && nota2 && nota3){
        let promedio;
        let consola = "";

        promedio = (nota1 + nota2 + nota3) / 3;
        consola += `<div class="respuesta">`;
        consola += `Su promedio es: <strong>${promedio}</strong>`;
        consola += `</div>`;

        document.getElementById('operacion').innerHTML = consola;
    }else{
        alert("Por favor ingrese datos validos");
    }
    
    return false
}