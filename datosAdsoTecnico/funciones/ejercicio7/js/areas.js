let ladoCuadrado;
let baseRectangulo;
let alturaRectangulo;
let baseTriangulo;
let alturaTriangulo;

function areaCuadrado(ladoCuadrado){
    let areaCu;
    lado = ladoCuadrado;
    areaCu = lado * lado;
    return areaCu
}   
function areaRectangulo(baseRectangulo, alturaRectangulo){
    let areaRec;
    base = baseRectangulo;
    altura = alturaRectangulo
    areaRec = baseRectangulo * alturaRectangulo;
    return areaRec
}
function areaTriangulo(baseTriangulo, alturaTriangulo){
    let areaTri;
    base = baseTriangulo;
    altura = alturaTriangulo
    areaTri = (baseTriangulo * alturaTriangulo) / 2;
    return areaTri
}

const exAreaCuadrado = function(ladoCuadrado){
    let areaCu;
    lado = ladoCuadrado;
    areaCu = lado * lado;
    return areaCu
}
const exAreaRectangulo = function(baseRectangulo, alturaRectangulo){
    let areaRec;
    base = baseRectangulo;
    altura = alturaRectangulo
    areaRec = baseRectangulo * alturaRectangulo;
    return areaRec
}
const exAreaTriangulo = function(baseTriangulo, alturaTriangulo){
    let areaTri;
    base = baseTriangulo;
    altura = alturaTriangulo
    areaTri = (baseTriangulo * alturaTriangulo) / 2;
    return areaTri
}
