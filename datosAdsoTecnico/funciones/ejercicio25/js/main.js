let numero;
let rango;
let par = 0;
let impar = 0;
let resultado;

function tablaMult(numero,rango){
    let tabla; 
    let contador;
    let consola = "";
    num = numero;
    ran = rango;

    for(tabla=1;tabla <= num;tabla++){
        for(contador=1;contador <= rango;contador++){
            resultado = tabla * contador;
            consola += `${tabla}x${contador}=${resultado} `;
            consola += condicion(resultado)+"\n";
        }
        consola += "\n";    
    }
   return consola + "El total de números pares es: "+par+"\n" +
   "El total de números impares es: "+impar;
}
function condicion(resultado){
    if(resultado %2==0){
        par = par + 1;
        return "Buzz";                                                      
    }else{
        impar = impar + 1;
        return "Bass";
    }
}
 
const exptablaMult = function(numero,rango){
    let tabla; 
    let contador;
    let consola = "";
    num = numero;
    ran = rango;

    for(tabla=1;tabla <= num;tabla++){
        for(contador=1;contador <= rango;contador++){
            resultado = tabla * contador;
            consola += `${tabla}x${contador}=${resultado} `;
            consola += expcondicion(resultado)+"\n";
        }
        consola += "\n";    
    }
   return consola + "El total de números pares es: "+par+"\n" +
   "El total de números impares es: "+impar;
}
const expcondicion = function(resultado){
    if(resultado %2==0){
        par = par + 1;
        return "Buzz";                                                      
    }else{
        impar = impar + 1;
        return "Bass";
    }
}