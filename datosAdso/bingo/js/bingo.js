/**
 * Ejercicio del bingo con arreglos
 * fecha:
 * Autor: JM GF
 */

document.addEventListener("DOMContentLoaded", function () {
  //Botones
  let boton1 = document.getElementById('botonB');
  let boton2 = document.getElementById('letraB');
  let boton3 = document.getElementById('letraI');
  let boton4 = document.getElementById('letraN');
  let boton5 = document.getElementById('letraG');
  let boton6 = document.getElementById('letraO');
  let boton7 = document.getElementById('botonx');
  let boton8 = document.getElementById('botonXXX');
  const informacion = document.getElementById('table');

  //Función para traer el limite

  function mandar() {
    let num = document.getElementById('txtNum').value;
    let limitrr = num
    return limitrr;
  }

  function letrasBingo(){
      let consola = "";
      consola += `<th class="blan" scope="col">B</th><th class="blan" scope="col">I</th><th class="blan" scope="col">N</th>
      <th class="blan" scope="col">G</th><th class="blan" scope="col">O</th>`;
      return consola;
  }
  
  let letrasBin = letrasBingo();
  
  function mostrarInformacion(numeroBoton) {
    //Arreglos 
  
    let bingo = [];
    let multiplicaciones = [];
    function tablab(){
      for (iteracionT = 0; iteracionT < 5; iteracionT++) {
        multiplicaciones = [];
        for (iteracionM = 0; iteracionM < 5; iteracionM++) {
          contadorM = contadorM + 1;
          resultado = contadorM * limite;
          multiplicaciones.push(resultado);
        }
        bingo.push(multiplicaciones);
      }
      return bingo;
    }
    //Variables
  
    let iteracionT;
    let iteracionM;
    let contadorM = 0;
    let resultado;
  
    let limite = mandar();
    // let limite = 0;

    if (numeroBoton === 1) {

      informacion.innerHTML = "";

      //Se crea la matriz
      tablab()
      
      let mostrarB = mostrar(bingo);
      document.getElementById("table").innerHTML = mostrarB;

      //Se itera para mostrar los datos de la matriz

      function mostrar(bingo) {
        let pantalla = "";

        pantalla += `<thead><tr>${letrasBin}</tr></thead>`
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
      informacion.innerHTML = ""; 
      //Se crea la matriz
      tablab()

      //Mostrar las Letras del Bingo 

      function letras(bingo) {
        let pantalla = "";

        //Letra B

        pantalla += `
          <div class="col-2">
          <table class="table">
          <thead>
            <tr>
              <th class="blan" >B</th>
            </tr>
          </thead>
          <tbody>`;
        for (let iteracionT = 0; iteracionT < 5; iteracionT++) {
          pantalla += `<tr>`;

          for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
            if (iteracionM === 0) {
              pantalla += `<th class="columna-bingo">${bingo[iteracionT][iteracionM]}</th>`;
            } else {
              pantalla += `<th>${bingo[iteracionT][iteracionM]}</th>`;
            }
          }

          pantalla += `</tr>`;
        }
        pantalla += `                      
            </tbody>
          </table>
          </div>`;
        return pantalla;
      }
      let mostrarletraB = letras(bingo);
      document.getElementById("table").innerHTML = mostrarletraB;

    } else if (numeroBoton === 3) {
      informacion.innerHTML = "";
      tablab()

      function letras(bingo) {
        let pantalla = "";

        //Letra I

        pantalla += `
        <div class="col-2">
        <table class="table table-success">
        <thead>
          <tr>
            <th class="blan" scope="col"></th>
            <th class="blan" scope="col">I</th>
      
          </tr>
        </thead>
        <tbody>`;

        for (let iteracionT = 0; iteracionT < 5; iteracionT++) {
          pantalla += `<tr>`;

          for(let iteracionM = 0; iteracionM < 5; iteracionM++) {
            if(iteracionM === 1){ 
              pantalla += `<th class="columna-bingo">${bingo[iteracionT][iteracionM]}</th>`;
            } else {
              pantalla += `<th>${bingo[iteracionT][iteracionM]}</th>`;
            }
          }

          pantalla += `</tr>`;
        }
        pantalla += `                      
          </tbody>
        </table>
        </div>`;
        return pantalla
      }
      let mostrarletraB = letras(bingo);
      document.getElementById("table").innerHTML = mostrarletraB;

    } else if (numeroBoton === 4) {
      informacion.innerHTML = "";

      tablab()

      function letras(bingo) {
        let pantalla = "";

        //Letra N

        pantalla += `
          <div class="col-2">
          <table class="table table-success">
          <thead>
            <tr>
              <th class="blan" scope="col"></th>
              <th class="blan" scope="col"></th>
              <th class="blan" scope="col">N</th>
        
            </tr>
          </thead>
          <tbody>`;

        for (let iteracionT = 0; iteracionT < 5; iteracionT++) {
          pantalla += `<tr>`;

          for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
            if (iteracionM === 2) { 
              pantalla += `<th class="columna-bingo">${bingo[iteracionT][iteracionM]}</th>`;
            } else {
              pantalla += `<th>${bingo[iteracionT][iteracionM]}</th>`;
            }
          }

          pantalla += `</tr>`;
        }
        pantalla += `                      
            </tbody>
          </table>
          </div>`;
        return pantalla;
      }
      let mostrarletraB = letras(bingo);
      document.getElementById("table").innerHTML = mostrarletraB;

    } else if (numeroBoton === 5) {
      informacion.innerHTML = "";

      tablab()

      function letras(bingo) {
        let pantalla = "";

        //Letra G

        pantalla += `
            <div class="col-2">
            <table class="table table-success">
            <thead>
              <tr>
                <th class="blan"scope="col"></th>
                <th class="blan"scope="col"></th>
                <th class="blan"scope="col"></th>
                <th class="blan"scope="col">G</th>
          
              </tr>
            </thead>
            <tbody>`;

        for (let iteracionT = 0; iteracionT < 5; iteracionT++) {
          pantalla += `<tr>`;

          for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
            if (iteracionM === 3) { // Si es la primera columna (B), añadir una clase para resaltar
              pantalla += `<th class="columna-bingo">${bingo[iteracionT][iteracionM]}</th>`;
            } else {
              pantalla += `<th>${bingo[iteracionT][iteracionM]}</th>`;
            }
          }

          pantalla += `</tr>`;
        }
        pantalla += `                      
              </tbody>
            </table>
            </div>`;
        return pantalla;
      }
      let mostrarletraB = letras(bingo);
      document.getElementById("table").innerHTML = mostrarletraB;

    } else if (numeroBoton === 6) {
      informacion.innerHTML = ""; 
      tablab()

      function letras(bingo) {
        let pantalla = "";

        //Letra O

        pantalla += `
          <div class="col-2">
          <table class="table ">
          <thead>
            <tr>
              <th class="blan" scope="col"></th>
              <th class="blan" scope="col"></th>
              <th class="blan" scope="col"></th>
              <th class="blan" scope="col"></th>
              <th class="blan" scope="col">O</th>   
            </tr>
          </thead>
          <tbody>`;

        for (let iteracionT = 0; iteracionT < 5; iteracionT++) {
          pantalla += `<tr>`;

          for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
            if (iteracionM === 4) { 
              pantalla += `<th class="columna-bingo">${bingo[iteracionT][iteracionM]}</th>`;
            } else {
              pantalla += `<th>${bingo[iteracionT][iteracionM]}</th>`;
            }
          }

          pantalla += `</tr>`;
        }
        pantalla += `                      
            </tbody>
          </table>
          </div>`;
        return pantalla;
      }
      let mostrarletraB = letras(bingo);
      document.getElementById("table").innerHTML = mostrarletraB;
    } else if (numeroBoton === 7) {
      informacion.innerHTML = ""; 

      tablab()

      let mostrarletraB = mostrarX(bingo);
      document.getElementById("table").innerHTML = mostrarletraB;
      function mostrarX(bingo) {
        let pantalla = ''
        pantalla += `<thead><tr>${letrasBin}</tr></thead>`;
      
        for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
      
          pantalla += '<tr>';
          
          for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
            if (iteracionM == iteracionT  || bingo.length - 1 == iteracionM + iteracionT ) {
              pantalla += `<th class="columna-bingo">${bingo[iteracionT][iteracionM]}</th>`;
            }else{
              pantalla += `<th>${bingo[iteracionT][iteracionM]}</th>`;
            }
          }
          pantalla += '</tr>';
        }
        pantalla += 
        ` </tbody>
        </table>`;
        return pantalla;
      }
    } else if (numeroBoton === 0) {
      informacion.innerHTML = "";
      for (iteracionT = 0; iteracionT < 5; iteracionT++) {
        multiplicaciones = [];

        for (iteracionM = 0; iteracionM < 5; iteracionM++) {
          contadorM = contadorM + 1;
          resultado = contadorM * limite;
          multiplicaciones.push(resultado);
        }

        bingo.push(multiplicaciones);
      }
  
      let x2 = [];
      let x3 = [];
      let x4 = [];

      for (let iteracionM = 0; iteracionM < 3; iteracionM++) {
        //Sacar x media
        x2.push(bingo[iteracionM][1 + iteracionM]);
        x2.push(bingo[iteracionM][3 - iteracionM]);
    
        // Sacar x Mediana
    
        x3.push(bingo[iteracionM + 2][iteracionM]);
        x3.push(bingo[iteracionM + 2][2 - iteracionM]);
    
        //Sacar x chiquita
    
        x4.push(bingo[2 + iteracionM][2 + iteracionM]);
        x4.push(bingo[2 + iteracionM][4 - iteracionM]);
      }
      let mostrarB = mostrar(bingo);
      document.getElementById("table").innerHTML = mostrarB;

      function mostrar(bingo) {
        let pantalla = "";
        pantalla += `<thead><tr>${letrasBin}</tr></thead>`;
          for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
            pantalla += `<tr>`;
            for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
              let clase = "";
       
              if (x2.includes(bingo[iteracionT][iteracionM])) {
                clase = "segundax"; // Clase para x2
              } else if (x3.includes(bingo[iteracionT][iteracionM])) {
                clase = "tercerx"; // Clase para x3
              } else if (x4.includes(bingo[iteracionT][iteracionM])) {
                clase = "cuartax"; // Clase para x4
              }
        
              if (clase !== "") {
                pantalla += `<th class="${clase}">${bingo[iteracionT][iteracionM]}</th>`;
              } else {
                pantalla += `<th>${bingo[iteracionT][iteracionM]}</th>`;
              }
            }
            pantalla += `</tr>`;
          }

        pantalla += `
          </tbody>
        </table>`;
        return pantalla;
      }
    }


  }
  boton1.addEventListener('click', function () {
    mostrarInformacion(1);
  });

  boton2.addEventListener('click', function () {
    mostrarInformacion(2);
  });

  boton3.addEventListener('click', function () {
    mostrarInformacion(3);
  });
  boton4.addEventListener('click', function () {
    mostrarInformacion(4);
  });
  boton5.addEventListener('click', function () {
    mostrarInformacion(5);
  });
  boton6.addEventListener('click', function () {
    mostrarInformacion(6);
  });
  boton7.addEventListener('click', function () {
    mostrarInformacion(7);
  });
  boton8.addEventListener('click', function () {
    mostrarInformacion(0);
  });
});
