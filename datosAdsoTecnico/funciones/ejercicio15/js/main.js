let notaNumero1;
let notaNumero2;
let notaNumero3;

function notas(notaNumero1,notaNumero2,notaNumero3){
    not1 = notaNumero1;
    not2 = notaNumero2;
    not3 = notaNumero3;
    let porcentaje1 = not1 * 0.2;
    let porcentaje2 = not2 * 0.35;
    let porcentaje3 = not3 * 0.45;
    let sumaTotal = porcentaje1 + porcentaje2 + porcentaje3;
    return sumaTotal
}
function condicion(sumaTotal){ 
    if(sumaTotal > 4.5){
        return "La nota "+sumaTotal+" es superior";
    }else{
        if(sumaTotal <= 4.5 && sumaTotal > 3.5){
            return "La nota "+sumaTotal+" es buena";
        }else{
            if(sumaTotal <= 3.5 && sumaTotal >= 3.0){
                return "La nota "+sumaTotal+" es media";
            }else{
                return "La nota "+sumaTotal+" es mala";
            }
        }
    }
}

const expnotas = function(notaNumero1,notaNumero2,notaNumero3){
    not1 = notaNumero1;
    not2 = notaNumero2;
    not3 = notaNumero3;
    let porcentaje1 = not1 * 0.2;
    let porcentaje2 = not2 * 0.35;
    let porcentaje3 = not3 * 0.45;
    let sumaTotal = porcentaje1 + porcentaje2 + porcentaje3;
    return sumaTotal
}
const expcondicion = function(sumaTotal){ 
    if(sumaTotal > 4.5){
        return "La nota "+sumaTotal+" es superior";
    }else{
        if(sumaTotal <= 4.5 && sumaTotal > 3.5){
            return "La nota "+sumaTotal+" es buena";
        }else{
            if(sumaTotal <= 3.5 && sumaTotal >= 3.0){
                return "La nota "+sumaTotal+" es media";
            }else{
                return "La nota "+sumaTotal+" es mala";
            }
        }
    }
}






