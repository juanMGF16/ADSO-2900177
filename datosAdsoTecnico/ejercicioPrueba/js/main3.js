// let bingo = [];
// let interno = [];
// let iteracion1;
// let iteracion2;
// let contador = 0;
// let tabla;
// let cantidadPares = 0;
// let cantidadImpares = 0;
// let letraB = [];
// let letraI = [];
// let letraN = [];
// let letraG = [];
// let letraO = [];
// let x1 = [];
// let x2 = [];
// let x3 = [];
// let x4 = [];

// function mandar(){
//     let mult = document.getElementById('txtNum').value;
//     let tablaHTML = '<table border="1">';
    
//     for(iteracion1 = 0; iteracion1 < 5; iteracion1++){
//         tablaHTML += '<tr>';
//         for(iteracion2 = 0; iteracion2 < 5; iteracion2++){
//             let tabla = (iteracion1 * 5) + iteracion2 + 1; // Calculamos el valor de la tabla
//             let clase = '';
//             if ((iteracion1 === iteracion2) || (iteracion1 + iteracion2 === 4)) {
//                 clase = 'x'; // Asignamos la clase 'x' a las celdas que forman la X
//             }
//             tablaHTML += `<td class="${clase} muestra">${tabla * mult}</td>`;
//         }
//         tablaHTML += '</tr>';
//     }
    
//     tablaHTML += '</table>';
//     document.getElementById('tablaBingo').innerHTML = tablaHTML;
// }

// for(iteracion1=0;iteracion1<5;iteracion1++){
//     for(iteracion2=0;iteracion2<5;iteracion2++){
//         if(bingo[iteracion1][iteracion2]%2==0){
//             cantidadPares = cantidadPares +1;
//         }
//         else{
//             cantidadImpares = cantidadImpares +1;
//         }
//     }
// }

// for(iteracion1=0;iteracion1<5;iteracion1++){
//     letraB.push(bingo[iteracion1][0])
// }
// console.log("Letra B: "+letraB);
// for(iteracion1=0;iteracion1<5;iteracion1++){
//     letraI.push(bingo[iteracion1][1])
// }
// console.log("Letra I: "+letraI);
// for(iteracion1=0;iteracion1<5;iteracion1++){
//     letraN.push(bingo[iteracion1][2])
// }
// console.log("Letra N: "+letraN);
// for(iteracion1=0;iteracion1<5;iteracion1++){
//     letraG.push(bingo[iteracion1][3])
// }
// console.log("Letra G: "+letraG);
// for(iteracion1=0;iteracion1<5;iteracion1++){
//     letraO.push(bingo[iteracion1][4])
// }
// console.log("Letra O: "+letraO);

// //Sacar la X Grande

// function mostrar(xp) {
//     let org = xp;

//     let imp = new Set(org);
//     let result = [...imp];
//     return result;
// }

// for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
//     x1.push(bingo[iteracion1][iteracion1]);
//     x1.push(bingo[iteracion1][4 - iteracion1]);
// }

// x1.sort(function (a, b) {
//     return a - b;
// });


// console.log("X Grande " + mostrar(x1));
// // console.log(x1);

// //Sacar x pequeña



// for (iteracion1 = 0; iteracion1 < 3; iteracion1++) {
//     x2.push(bingo[iteracion1][1 + iteracion1]);
//     x2.push(bingo[iteracion1][3 - iteracion1]);
// }

// x2.sort(function (a, b) {
//     return a - b;
// });

// console.log('X SubUna '+mostrar(x2));


// //Sacar x pequeña

// for (iteracion1 = 0; iteracion1 < 3; iteracion1++) {
//     x3.push(bingo[iteracion1 + 2][iteracion1]);
//     x3.push(bingo[iteracion1 + 2][2 - iteracion1]);
// }

// x3.sort(function (a, b) {
//     return a - b;
// });


// console.log("X SubDos " + mostrar(x3));
// // console.log(x3);

// //Sacar x Mini

// for (iteracion1 = 0; iteracion1 < 3; iteracion1++) {
//     x4.push(bingo[2 + iteracion1][2 + iteracion1]);
//     x4.push(bingo[2 + iteracion1][4 - iteracion1]);
// }

// x4.sort(function (a, b) {
//     return a - b;
// });


// console.log("X SubTres " + mostrar(x4));

// console.log("Cantidad de Números pares: "+cantidadPares);
// console.log("Cantidad de Números impares: "+cantidadImpares);

// Obtener referencias a los botones y al área de información
document.addEventListener('DOMContentLoaded', function() {
    const boton1 = document.getElementById('boton1');
    const boton2 = document.getElementById('boton2');
    const informacion = document.getElementById('informacion');
    const informacion2 = document.getElementById('informacion2');

    function mostrarInformacion(numeroBoton) {
        // Limpiar el contenido anterior
        if (numeroBoton === 1) {
            informacion.innerHTML = ""; // Limpiar el contenido de informacion
            informacion2.textContent = ""; // Limpiar el contenido de informacion2 si es necesario

            // Resto del código para mostrar la información correspondiente
            let bingo = [];
            let multiplicaciones = [];
        
            let iteracionT;
            let iteracionM;
            let contadorM = 0;
            let resultado;
        
            for (iteracionT = 0; iteracionT < 5; iteracionT++) {
                multiplicaciones = [];
        
                for (iteracionM = 0; iteracionM < 5; iteracionM++) {
                    contadorM = contadorM + 1;
                    resultado = contadorM * 3;
                    multiplicaciones.push(resultado);
                }
        
                bingo.push(multiplicaciones);
            }
        
            let mostrarB = mostrar(bingo);
            document.getElementById("informacion").innerHTML = mostrarB;

            function mostrar(bingo) {
                let pantalla = "";
                pantalla += `<thead>
                            <tr>
                              <th scope="col">B</th>
                              <th scope="col">I</th>
                              <th scope="col">N</th>
                              <th scope="col">G</th>
                              <th scope="col">O</th>
                            </tr>
                          </thead>`
                for (iteracionT = 0; iteracionT < 5; iteracionT++) {
                    pantalla += `<tr>`;
        
                    for (iteracionM = 0; iteracionM < 5; iteracionM++) {
                        pantalla += `<th>${bingo[iteracionT][iteracionM]}</th>`;
                    }
        
                    pantalla += `</tr>`;
                }
                return pantalla;
            }

        } else if (numeroBoton === 2) {
            informacion2.textContent = "Esta es la Información 2";
            informacion.innerHTML = ""; // Limpiar el contenido de informacion si es necesario
        }
    }

    boton1.addEventListener('click', function() {
        mostrarInformacion(1);
    });

    boton2.addEventListener('click', function() {
        mostrarInformacion(2);
    });
});
