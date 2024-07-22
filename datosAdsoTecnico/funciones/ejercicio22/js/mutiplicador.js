let numero;

function tabla(numero){
    let contador;
    let multiplicacion = 1;
    num = numero;
    let consola = ""; 
    for(contador=1;contador <= num;contador++){
        multiplicacion = num * contador;
        consola += `${num}x${contador}=${multiplicacion}\n`;
    }
    return consola
}

const exptabla  = function(numero){
    let contador;
    let multiplicacion = 1;
    num = numero;
    let consola = ""; 
    for(contador=1;contador <= num;contador++){
        multiplicacion = num * contador;
        consola += `${num}x${contador}=${multiplicacion}\n`;
    }
    return consola
}
