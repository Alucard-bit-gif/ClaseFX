'use strict'
//Ejercicio #1

//Inicio

//Declarar Variables
//Nota: aplicar float;

let area;
let base;
let altura;

function Calcular(){

//Leer variables

//Ingresar base.
base= parseFloat(document.getElementById('base').value);

//Ingresar altura.
altura= parseFloat(document.getElementById('altura').value);

//Invocar función
area = areaRectangulo(base,altura);

//Imprimir

document.getElementById('totalarea').value= area;

}

//Procedimiento


function areaRectangulo(base,altura){

    area = base*altura;
    return area;
}


//Final

//-------------------------------------------------------------------------------------------------------->

//Ejercicio #2//

//Inicio

//Declarar Variables
///Nota: aplicar float

let radio;
let radio2;
let areaCirc;
let numeroPi=3.1416;

function CalcularA(){

//Leer variables

//Ingresar radio
radio = Number(document.getElementById('radio').value); 


//Invocar Función
areaCirc = areaCircunferencia(numeroPi,radio2);
radio2 = calculoRadio2(radio); 


//Imprimir
document.getElementById('totalarea2').value= numeroPi*radio2;

}

//Procedimiento

function areaCircunferencia(numeroPi,radio2){

areaCirc = numeroPi*radio2;
return areaCirc;

}

function calculoRadio2(radio){

    radio2 = radio*radio;
    return radio2;
    
    }

//Final

//---------------------------------------------------------------------------------------------------------->

//Ejercicio # 3//

//Inicio

//Declarar variables























//Archivo para funciones a entregar miércoles*/
