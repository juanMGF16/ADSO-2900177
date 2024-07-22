/*
funcion operaciones
autor: Juan M. Gutierrez
fecha: 17 de junio de 2024
*/
function operar(){
    let num1 = parseInt(document.getElementById('txtnumUno').value);
    let num2 = parseInt(document.getElementById('txtnumDos').value);
    if(num1 && num2){
        let suma;
        let resta;
        let multiplicacion;
        let division;

        suma = num1 + num2;
        resta = num1 - num2;
        multiplicacion = num1 * num2;
        division = num1 / num2;

        document.getElementById('operacion').innerHTML = `<strong>
        La suma es: ${suma} <br> 
        La resta es: ${resta} <br>
        La multiplicación es: ${multiplicacion} <br>
        La División es: ${division} <br>
        </strong>`
    }else{
        document.getElementById('operacion').innerHTML = "digite datos"
    }
    
    return false
}