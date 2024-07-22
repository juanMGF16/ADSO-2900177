let numero1;
let numero2;
let numero3;

function numeroMayor(numero1,numero2,numero3){
    num1 = numero1;
    num2 = numero2;
    num3 = numero3;
    if(num1 == num2 && num1 == num3 && num3 == num2){
        return "Los números son iguales";
    }else{
        if(num1 > num2 && num1 > num3){
            return"El número "+num1+" es mayor";
        }else{
            if(num2 > num1 && num2 > num3){
                return"El número "+num2+" es mayor";
            }else{
                return"El número "+num3+" es mayor";
            }
        }
    }
}

const expnumeroMayor = function(numero1,numero2,numero3){
    num1 = numero1;
    num2 = numero2;
    num3 = numero3;
    if(num1 == num2 && num1 == num3 && num3 == num2){
        return "Los números son iguales";
    }else{
        if(num1 > num2 && num1 > num3){
            return"El número "+num1+" es mayor";
        }else{
            if(num2 > num1 && num2 > num3){
                return"El número "+num2+" es mayor";
            }else{
                return"El número "+num3+" es mayor";
            }
        }
    }
}