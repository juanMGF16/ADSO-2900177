let lado;

function areaCuadrado(lado){
    let ladoCuadrao = lado;
    let area;
    area = ladoCuadrao * ladoCuadrao;
    return area;
}
function condicion(area1,area2,area3){
    let areaCu1 = area1;
    let areaCu2 = area2;
    let areaCu3 = area3;
    if(areaCu1 == areaCu2 && areaCu1 == areaCu3 && areaCu3 == areaCu2){
        return "Las tres areas son iguales";
    }else{
        if(areaCu1 > areaCu2 && areaCu1 > areaCu3){
            return "La primer area "+areaCu1+" es mayor";  
        }else{
            if(areaCu2 > areaCu1 && areaCu2 > areaCu3){
                return"La segunda area "+areaCu2+" es mayor";
            }else{
                return"La tercer area "+areaCu3+" es mayor";
            }
        }
    }
}


const expareaCuadrado = function(lado){
    let ladoCuadrao = lado;
    let area;
    area = ladoCuadrao * ladoCuadrao;
    return area;
}
const expcondicion = function(area1,area2,area3){
    let areaCu1 = area1;
    let areaCu2 = area2;
    let areaCu3 = area3;
    if(areaCu1 == areaCu2 && areaCu1 == areaCu3 && areaCu3 == areaCu2){
        return "Las tres areas son iguales";
    }else{
        if(areaCu1 > areaCu2 && areaCu1 > areaCu3){
            return "La primer area "+areaCu1+" es mayor";  
        }else{
            if(areaCu2 > areaCu1 && areaCu2 > areaCu3){
                return"La segunda area "+areaCu2+" es mayor";
            }else{
                return"La tercer area "+areaCu3+" es mayor";
            }
        }
    }
}