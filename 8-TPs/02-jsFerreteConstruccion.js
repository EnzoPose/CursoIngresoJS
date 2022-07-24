/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let ancho;
    let largo;
    let perimetro;
    let alambreRequerido;
    let mensaje;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value)

    //perimetro = largo * 2 + ancho * 2;

    //perimetro = largo + largo + ancho + ancho;

    perimetro = 2*(largo + ancho);

    alambreRequerido = perimetro * 3;

    mensaje = "La cantidad de alambre requerido es de " + alambreRequerido.toFixed(2) + " Mts";
    
    alert(mensaje);
}

   /* Entrada:
        -Largo
        -Ancho

    Proceso:
        -Calcular perimetro de un rectangulo
        -Multiplicar el alambre x3
    
    Salida:
        -Alert de el alambre requerido
*/
function Circulo () 
{
    var radioIngresado;
    var perimetro;
    var alambreRequerido;
    var mensaje;
    //const PI = 3.14;
    
    radioIngresado = parseFloat(txtIdRadio.value);
    // perimetro = radioIngresado * 2 * PI;
    // perimetro = radioIngresado * 2 * 3.14;
    // alert (Math.PI);
    perimetro = radioIngresado * 2 * Math.PI;
    alambreRequerido = perimetro * 3;
    mensaje = "la cantidad de alambre requerido es de " + alambreRequerido.toFixed(2) + " metros ";
	alert(mensaje);
}
/*
entrada:radio
proceso:calcular perimetro 2*pi*radio 
resultado = perimetro * 3
salida:alert (cantidad de alambre)
*/
function Materiales () 
{
	var largo;
    var ancho; 
    var area;
    var bolsaCemento;
    var bolsaCal;
    var mensaje;
   
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    largo =parseFloat(document.getElementById("txtIdLargo").value);
    
    area = largo * ancho;
    bolsaCemento = area * 2;
    bolsaCal = area * 3;

    mensaje = "Usted necesita: " + bolsaCemento;
    mensaje = mensaje + " bolsas de cemento y " + bolsaCal + " bolsas de cal.";
    
    alert(mensaje);
}

/*
const PI = 3.14;
si yo a la constante pi le pongo "3.14" despues puedo hacerle un parseint o siempre va a ser "3.14"?

*/

/*
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
    




function Rectangulo () 
{
    let ancho;
    let largo;
    let perimetro;
    let alambreRequerido;
    let mensaje;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value)

    //perimetro = largo * 2 + ancho * 2;

    //perimetro = largo + largo + ancho + ancho;

    perimetro = 2*(largo + ancho);

    alambreRequerido = perimetro * 3;

    mensaje = "La cantidad de alambre requerido es de " + alambreRequerido.toFixed(2) + " Mts";
    
    alert(mensaje);






}


/*
Entrada:
 -Radio
Proceso:
 -Calcular perimetro (2* pi * radio)
 - resultado = perimetro * 3
Salida:
 -alerte mostrando resultado
*/

function Circulo () 
{
	let radioIngresado;
	let perimetro;
	let alambreRequerido;

	radioIngresado = parseFloat(document.getElementById('txtIdRadio').value);
	
	perimetro = radioIngresado * 2 * 3.14;
	alambreRequerido = perimetro * 3;

	mensaje = alambreRequerido;

	alert("Se necesitara: " + alambreRequerido + "Ms de alambre");
}
   
/*
entrada: largo y ancho
preceso: calcular area y multiplicar area x bolsa de cemento y cal
salida: alert de cantidad de bolsas 
Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

/*
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var bolsaCemento;
    var bolsaCal;
    var mensaje;
    
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    largo = parseFloat(document.getElementById("txtIdLargo").value);
    area = largo * ancho;
    bolsaCemento = area * 2;
    bolsaCal = area * 3;
    mensaje = "Se necesitan " + bolsaCemento; 
    mensaje = mensaje + " bolsa de cemento y " + bolsaCal + " bolsa de cal ";
    alert (mensaje);
} */