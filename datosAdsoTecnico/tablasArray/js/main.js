/**
 * tablas de multiplicar con array
 * autor: JM
 * fecha: 10-07-2024
 */

document.addEventListener('DOMContentLoaded', function(){
    let tabla = [];
    let multiplo = [];
    let iteracionTabla;
    let iteracionMultiplo;
    let resultado;
    let numerotabla;
    let numeromultiplo;
    let consola = "";

    for(iteracionTabla = 0;iteracionTabla < 5; iteracionTabla++){
        multiplo = [];
        numerotabla = iteracionTabla + 1;
        for(iteracionMultiplo = 0;iteracionMultiplo < 10;iteracionMultiplo++){
            numeromultiplo = iteracionMultiplo + 1;
            resultado = numerotabla * numeromultiplo;
            multiplo.push(resultado);
        }
        tabla.push(multiplo);
    }
    for(iteracionTabla = 0; iteracionTabla < tabla.length; iteracionTabla++){
        numerotabla = iteracionTabla+1;
        consola += ' <div class="accordion-item">';
        consola += '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse'+numerotabla+'" aria-expanded="false" aria-controls="flush-collapseOne">'; 
        consola += 'Tablas de Multiplicar #'+numerotabla; 
        consola += '</button>';
        consola += ' <div id="flush-collapse'+numerotabla+'" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">';

        for(iteracionMultiplo = 0; iteracionMultiplo < 10; iteracionMultiplo++){
            numeromultiplo = iteracionMultiplo+1;

            consola += ' <div class="accordion-body" style ="padding : 0> !important;">';
            // consola += '<table class="table">';
            consola += numerotabla+ 'X' +numeromultiplo+ '=' +tabla[iteracionTabla][iteracionMultiplo];
            // consola += '<tr style= "padding:0; margin:0;"><td "padding:0; margin:0;">'+numerotabla+ 'X' +numeromultiplo+ '=' +tabla[iteracionTabla][iteracionMultiplo]+'</td></tr>';
            // consola += '</table>';

            consola += '</div>';
        }
        consola += '</div>';
        consola += '</div>';
    }
    document.getElementById('accordionFlushExample').innerHTML = consola;
});