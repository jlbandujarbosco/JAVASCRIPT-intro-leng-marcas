function verificaEdad() {
    var edad = prompt('Dime tu edad');
    if (edad < 18) {
        document.write("<h2>No puedes entrar en este sitio</h2>");
    } else {
        document.write("<h2>Bienvenido</h2>");
    }
}

function media2Numeros(a,b){
    let suma = a + b;
    return suma/2;
}

function calculaMedia(){
    let n1 = prompt("Dime el primer número");
    let n2 = prompt("Dime el segundo número");
    if (isNaN(n1) || isNaN(n2) ) {
        alert("Solo se aceptan números");
    } else {
        let media  = media2Numeros(Number(n1),Number(n2));
        alert("La media de " + n1 + " y " + n2 + " es " + media);
    }
  
}

function tablaMultiplicar(){
    let numero = prompt("Dime de qué número quieres la tabla");
    let cadena = '';
    for ( let i=0;i<=10;i++ ){
        cadena = cadena + numero + " * " + i + " = " + numero*i + "<br>";
    }
    document.write(cadena);
}
let alineacion = ['Raúl','Benzemá','Butragueño','Figo'];

function posicion(){
    let numero = prompt("Dime el número");
    if ( numero >alineacion.length || numero<1 ){
        alert("Posición no asignada");
        return;
    }
    alert('En la posición ' + numero +
     " juega " + alineacion[numero-1] );
}

function imprimeAlineación(){
    let cadena='';
    for(let i=0;i<alineacion.length; i++){
        cadena += i + "." + alineacion[i] + "<br>";             
    }
    document.write(cadena);
}
function areaTriangulo(){
    base = prompt("Dime la base");
    altura = prompt("Dime la altura");
    alert( "El área del triángulo es " + calculaAreaTriangulo(base,altura));
}

function calculaAreaTriangulo(b,a){
    return b*a/2;
}

function areaTrianguloInputs(){
    let base=document.getElementById("base");
    let altura= document.getElementById("altura");
    baseNumero = base.value;
    alturaNumero = altura.value;
    let area = calculaAreaTriangulo(baseNumero,alturaNumero);
    let resultado=document.getElementById("resultado");
    resultado.innerHTML = "El área es " + area;
}

function cambiarImagen(){
    let miImagen=document.getElementById("foto");
    if ( miImagen.src == "./images/que-ver-en-alcazar-de-san-juan.jpg") {
        miImagen.src = "./images/alcazar-san-juan.avif"
    } else {
        miImagen.src == "./images/que-ver-en-alcazar-de-san-juan.jpg"
    }
   
}

function cambiaTitulo() {
    let miTitulo=document.getElementById("titulo");
    miTitulo.style.fontSize = "4em";
    miTitulo.style.color = "red";
    miTitulo.style.fontFamily = "Arial";
}