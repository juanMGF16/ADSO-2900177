/*
funcion saludar
autor: Juan M. Gutierrez
fecha: 17 de junio de 2024
*/
function saludar(){
    let saludo = document.getElementById('txtSaludo').value;

    document.getElementById('saludo').innerHTML = `<strong>${saludo}</strong>`
    
    return false
}