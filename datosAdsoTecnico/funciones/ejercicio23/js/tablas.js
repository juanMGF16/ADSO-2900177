let numero;
let rango;

function tabla(numero,rango){
    let contador;
    let multiplicacion  = 1 ;
    let consola = "";
    num = numero;
    ran = rango;
    for(contador=1;contador <= ran;contador++){
        multiplicacion = num * contador;
        consola += condicion(multiplicacion);
    }
    return consola;
}
function condicion(multiplicacion){
    if(multiplicacion  %2==0){
        return multiplicacion+" es número par \n";
    }else{
        return multiplicacion+" es número impar \n";
    }
}
const exptabla = function(numero,rango){
    let contador;
    let multiplicacion  = 1 ;
    let consola = "";
    num = numero;
    ran = rango;
    for(contador=1;contador <= ran;contador++){
        multiplicacion = num * contador;
        consola += expcondicion(multiplicacion);
    }
    return consola;
}
const expcondicion = function(multiplicacion){
    if(multiplicacion  %2==0){
        return multiplicacion+" es número par \n";
    }else{
        return multiplicacion+" es número impar \n";
    }
}