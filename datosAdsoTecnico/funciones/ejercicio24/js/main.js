let numero;
let rango;
let par = 0;
let impar = 0;
let multiplicacion;

function multTabla(numero, rango){
    let tabla = 1; 
    let contador = 0;
    let consola = "";
    ran = rango;
    num = numero;

    while(tabla <= num){
        contador = 0;
        while(contador < rango){
            contador++;
            multiplicacion = tabla * contador;
            consola += `${tabla}x${contador}=${multiplicacion} `;
            consola += condicion(multiplicacion)+"\n";
        }
        tabla++
        consola += "\n";    
    }
   return consola + "El total de números pares es: "+par+"\n" +
   "El total de números impares es: "+impar;
}
function condicion(multiplicacion){
    if(multiplicacion %2==0){
        par = par + 1;
        return "Buzz";                                                      
    }else{
        impar = impar + 1;
        return "Bass";
    }
}

function expmultTabla(numero, rango){
    let tabla = 1; 
    let contador = 0;
    let consola = "";
    ran = rango;
    num = numero;

    while(tabla <= num){
        contador = 0;
        while(contador < ran){
            contador++;
            multiplicacion = tabla * contador;
            consola += `${tabla}x${contador}=${multiplicacion} `;
            consola += expcondicion(multiplicacion)+"\n";
        }
        tabla++
        consola += "\n";    
    }
   return consola + "El total de números pares es: "+par+"\n" +
   "El total de números impares es: "+impar;
}
function expcondicion(multiplicacion){
    if(multiplicacion %2==0){
        par = par + 1;
        return "Buzz";                                                      
    }else{
        impar = impar + 1;
        return "Bass";
    }
}
