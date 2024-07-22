document.addEventListener('DOMContentLoaded', function() {
  let boton1 = document.getElementById('botonB');
  let boton2 = document.getElementById('letraB');
  let boton3 = document.getElementById('letraI');
  let boton4 = document.getElementById('letraN');
  let boton5 = document.getElementById('letraG');
  let boton6 = document.getElementById('letraO');
  let boton7 = document.getElementById('botonx');
  let boton8 = document.getElementById('botonXXX');
  const informacion = document.getElementById('table');

  function tablab(limite) {
    let bingo = [];
    let contadorM = 0;
    for (let iteracionT = 0; iteracionT < 5; iteracionT++) {
      let multiplicaciones = [];
      for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
        contadorM = contadorM + 1;
        let resultado = contadorM * limite;
        multiplicaciones.push(resultado);
      }
      bingo.push(multiplicaciones);
    }
    return bingo;
  }

  function letrasBingo() {
    let consola = "";
    consola += `<th class="blan" scope="col">B</th><th class="blan" scope="col">I</th><th class="blan" scope="col">N</th>
    <th class="blan" scope="col">G</th><th class="blan" scope="col">O</th>`;
    return consola;
  }

  boton1.addEventListener('click', function() {
    informacion.innerHTML = "";

    let num = document.getElementById('txtNum').value;
    if(num == 0 || num == "") {
      boton2.style.display = 'none'            
      boton3.style.display = 'none'            
      boton4.style.display = 'none'            
      boton5.style.display = 'none'            
      boton6.style.display = 'none'            
      boton7.style.display = 'none'            
      boton8.style.display = 'none' 
      document.getElementById("table").innerHTML = `<b>Digite Datos validos</b>`;
    } else {
      let limite = num;
      let letrasCarton = letrasBingo();
      let bingo = tablab(limite);
      
      //Se itera para mostrar los datos de la matriz   
      function mostrar() {
        let pantalla = "";
        
        pantalla += `<thead><tr>${letrasCarton}</tr></thead>`;
        for (let iteracionT = 0; iteracionT < 5; iteracionT++) {
          pantalla += `<tr>`;
          for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
            pantalla += `<th>${bingo[iteracionT][iteracionM]}</th>`;
          }
          pantalla += `</tr>`;
        }
        return pantalla;
      }
      let mostrarB = mostrar();
      document.getElementById("table").innerHTML = mostrarB;

      boton2.style.display = 'block'            
      boton3.style.display = 'block'            
      boton4.style.display = 'block'            
      boton5.style.display = 'block'            
      boton6.style.display = 'block'            
      boton7.style.display = 'block'            
      boton8.style.display = 'block'            
    }
  });
  boton2.addEventListener('click', function() {
    informacion.innerHTML = "";

    let num = document.getElementById('txtNum').value; 
    let limite = num;
    let letrasCarton = letrasBingo();
    let bingo = tablab(limite);
      
      //Se itera para mostrar los datos de la matriz   
    function letras(){
      let pantalla = "";
      pantalla += `<thead><tr>${letrasCarton}</tr></thead>`;
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
      
    let mostrarB = letras();
    document.getElementById("table").innerHTML = mostrarB;
  });
  boton3.addEventListener('click', function() {
    informacion.innerHTML = "";
    let num = document.getElementById('txtNum').value; 
    let limite = num;
    let letrasCarton = letrasBingo();
    let bingo = tablab(limite);
      
      //Se itera para mostrar los datos de la matriz   
      function letras() {
        let pantalla = "";

        pantalla += `<thead><tr>${letrasCarton}</tr></thead>`;
        for (let iteracionT = 0; iteracionT < 5; iteracionT++) {
          pantalla += `<tr>`;

          for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
            if (iteracionM === 1) {
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
      
      let mostrarB = letras();
      document.getElementById("table").innerHTML = mostrarB;
  });
  boton4.addEventListener('click', function() {
    informacion.innerHTML = "";
    let num = document.getElementById('txtNum').value; 
    let limite = num;
    let letrasCarton = letrasBingo();
    let bingo = tablab(limite);
      
      //Se itera para mostrar los datos de la matriz   
      function letras() {
        let pantalla = "";

        pantalla += `<thead><tr>${letrasCarton}</tr></thead>`;
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
      
      let mostrarB = letras();
      document.getElementById("table").innerHTML = mostrarB;
  });
  boton5.addEventListener('click', function() {
    informacion.innerHTML = "";
    let num = document.getElementById('txtNum').value; 
    let limite = num;
    let letrasCarton = letrasBingo();
    let bingo = tablab(limite);
      
      //Se itera para mostrar los datos de la matriz   
      function letras() {
        let pantalla = "";

        pantalla += `<thead><tr>${letrasCarton}</tr></thead>`;
        for (let iteracionT = 0; iteracionT < 5; iteracionT++) {
          pantalla += `<tr>`;

          for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
            if (iteracionM === 3) {
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
      
      let mostrarB = letras();
      document.getElementById("table").innerHTML = mostrarB;
  });
  boton6.addEventListener('click', function() {
    informacion.innerHTML = "";
    let num = document.getElementById('txtNum').value; 
    let limite = num;
    let letrasCarton = letrasBingo();
    let bingo = tablab(limite);
      
      //Se itera para mostrar los datos de la matriz   
      function letras() {
        let pantalla = "";

        pantalla += `<thead><tr>${letrasCarton}</tr></thead>`;
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
      
      let mostrarB = letras();
      document.getElementById("table").innerHTML = mostrarB;
  });
  boton7.addEventListener('click', function() {
    informacion.innerHTML = "";
    let num = document.getElementById('txtNum').value; 
    let limite = num;
    let letrasCarton = letrasBingo();
    let bingo = tablab(limite);
        
    function mostrarX() {
      let pantalla = ''
      pantalla += `<thead><tr>${letrasCarton}</tr></thead>`;
    
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
      
      let mostrarB = mostrarX();
      document.getElementById("table").innerHTML = mostrarB;
  });
  boton8.addEventListener('click', function() {
    informacion.innerHTML = "";
    let num = document.getElementById('txtNum').value; 
    let limite = num;
    let letrasCarton = letrasBingo();
    let bingo = tablab(limite);
    
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

    function mostrarxXx() {
      let pantalla = "";
      pantalla += `<thead><tr>${letrasCarton}</tr></thead>`;
        for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
          pantalla += `<tr>`;
          for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
            let clase = "";
      
            if (x2.includes(bingo[iteracionT][iteracionM])) {
              clase = "segundax"; 
            } else if (x3.includes(bingo[iteracionT][iteracionM])) {
              clase = "tercerx"; 
            } else if (x4.includes(bingo[iteracionT][iteracionM])) {
              clase = "cuartax"; 
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
    let mostrarB = mostrarxXx();
    document.getElementById("table").innerHTML = mostrarB;
  });
});