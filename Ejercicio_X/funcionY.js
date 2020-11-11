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

//Nota: aplicar float;

let areaT;
let baseB;
let alturaA;

function CalcularB(){

//Leer variables

//Ingresar base.
baseB= parseFloat(document.getElementById('base1').value);

//Ingresar altura.
alturaA= parseFloat(document.getElementById('altura1').value);

//Invocar función
areaT = areaTriangulo(baseB,alturaA);

//Imprimir

document.getElementById('totalarea3').value= areaT;

}

//Procedimiento


function areaTriangulo(baseB,alturaA){

    areaT = (baseB*alturaA)/2;
    return areaT;
}

//Final

//-------------------------------------------------------------------------------------------------->

//Ejercicio #4//

//Inicio

//Declarar Variables
///Nota: aplicar float

let metrosTela;
const numeroPulgas=0.0254;
let pulgadaTela;

function CalcularC(){

//Leer variables

//Ingresar metros
metrosTela = parseFloat(document.getElementById('metros').value); 


//Invocar Función
pulgadaTela = calculoPulgada(metrosTela);
 

//Imprimir
document.getElementById('totalarea4').value= pulgadaTela;

}

//Procedimiento

function calculoPulgada(metrosTela){

pulgadaTela = metrosTela/numeroPulgas;
return pulgadaTela;

}

//Final

















//Archivo para funciones a entregar miércoles*/
