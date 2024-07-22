let num;

function tablaMult(num){
    let tabla = 0;
    let mult;
    let result = 0;
    let par = 0;
    let impar = 0;
    let consola = "";
    numero = num;

    while(tabla < numero){
        tabla++;
        mult = 0;
        while(mult < 5){
            result = tabla * (mult + 1);
            consola += `${tabla}x${(mult+1)}=${result}`;
            if(result % 2 == 0){
                par++;
                consola += "Buzz \n";
            }else{
                impar++;
                consola += "Bass \n";
            }
            mult++;
        }
    }
    consola += "El total de números pares es: "+par+"\n";
    consola += "El total de números impares es: "+impar+"\n"; 

    return consola;
}

const exptablaMult = function(num){
    let tabla = 0;
    let mult;
    let result = 0;
    let par = 0;
    let impar = 0;
    let consola = "";
    numero = num;

    while(tabla < numero){
        tabla++;
        mult = 0;
        while(mult < 5){
            result = tabla * (mult + 1);
            consola += `${tabla}x${(mult+1)}=${result}`;
            if(result % 2 == 0){
                par++;
                consola += "Buzz \n";
            }else{
                impar++;
                consola += "Bass \n";
            }
            mult++;
        }
    }
    consola += "El total de números pares es: "+par+"\n";
    consola += "El total de números impares es: "+impar+"\n"; 

    return consola;
}

 