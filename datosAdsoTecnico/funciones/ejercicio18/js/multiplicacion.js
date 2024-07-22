let numero;

function tabla(numero){
    let contador = 0;
    let multiplicacion = 1;
    let consola = "";
    num = numero;
    while(contador < num){
        contador++;
        multiplicacion = numero * contador;
        consola += `${numero}x${contador}=${multiplicacion}\n`;
    }
    return consola;
}

const exptabla = function(numero){
    let contador = 0;
    let multiplicacion = 1;
    let consola = "";
    num = numero;
    while(contador < num){
        contador++;
        multiplicacion = numero * contador;
        consola += `${numero}x${contador}=${multiplicacion}\n`;
    }
    return consola;
}