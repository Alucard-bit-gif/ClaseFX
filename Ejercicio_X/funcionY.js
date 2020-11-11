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

//-------------------------------------------------------------------------------------------------->

//Ejercicio # 5//


// Declarar Variables


let valorHora;
let num_horas;
let num_minutes;
let horaCompleta;
let cobroEstacion;

//Leer Variables

function CalcularD(){

//Registar valor hora

//Registrar número de horas
num_horas = parseFloat(document.getElementById('horas').value); 

//Registrar número minutos
num_minutes = parseFloat(document.getElementById('mints').value); 


}

horas(h) = 2;
minutos(m) = 20;
Resultado (fH) = 2 + (20/60) + (1 - (20/60)) ;
totalfH = 2 + 0.33 + (1 - 0.33)
totalfH = 2.33 + 0.67 = 3h.
Resultado (cobroE) = 2000 * 3;
cobroE = 6000.*/

/*Resultado (tiempoG) = 9:45 - 7:25 = 2h 20m;

//Inicio

//Declarar

/* let valorH1;
   let horaI;
   let horaS;
   let tiempoG;
   let horas;
   let minutos;
   let cobroE;
   let fH;
*/

//Leer

let valorH1 = 2000;
let horaI = 7.25;
let horaS = 9.45;


//Procedimiento

let tiempoG = 9.45 - 7.25;
let horas = 2;
let minutos = 20;
let fH = (2 + (20/60)) + (1 - (20/60));
let cobroE = fH * valorH1;

//Resultado

let rQ14 = document.querySelector('.rQ14');
rQ14.innerHTML = "El valor del estacionamiento es de " + " " + "COP$" + cobroE + " pesos" + " " + 
                "por 2h 20 min";    

//Final 













//Archivo para funciones a entregar miércoles*/
