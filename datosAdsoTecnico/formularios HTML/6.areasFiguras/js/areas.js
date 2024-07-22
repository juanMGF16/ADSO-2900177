/*
areas
autor: Juan M. Gutierrez
fecha: 24 de junio de 2024
*/
function operar(){
    let ladoCuadrado = parseFloat(document.getElementById('txtLadoC').value);
    let alturaRectangulo = parseFloat(document.getElementById('txtAlturaR').value);
    let baseRectangulo = parseFloat(document.getElementById('txtBaseR').value);
    let alturaTriangulo = parseFloat(document.getElementById('txtAlturaT').value);
    let baseTriangulo = parseFloat(document.getElementById('txtBaseT').value);
    
    if(ladoCuadrado && alturaRectangulo && baseRectangulo && alturaTriangulo && baseTriangulo){
        let areaCuadrado;
        let areaRectangulo;
        let areaTriangulo;
        let consola = "";

        areaCuadrado = ladoCuadrado * ladoCuadrado;
        areaRectangulo = baseRectangulo * alturaRectangulo
        areaTriangulo = (baseTriangulo * alturaTriangulo) / 2

        consola += `<div class="respuesta">`;
        consola += `El area del Cuadrado es: <strong>${areaCuadrado}</strong> <br>`;
        consola += `El area del Rectangulo es: <strong>${areaRectangulo}</strong> <br>`;
        consola += `El area del Triangulo es: <strong>${areaTriangulo}</strong> <br>`;
        consola += `</div>`;

        document.getElementById('operacion').innerHTML = consola;
    }else{
        alert("Por favor ingrese datos validos");
    }
    
    return false
}
