/*1.
Pose, Enzo DIV Z
Trabajo practico E/S 01
	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var mensaje;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    
    precioDos = document.getElementById("txtIdPrecioDos").value;
    
    precioTres= document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres= parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;
    
    mensaje = "La suma es de: " + suma;

    alert(mensaje);



}
function Promedio () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var promedio;
    var mensaje;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    
    precioDos = document.getElementById("txtIdPrecioDos").value;
    
    precioTres= document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres= parseInt(precioTres);

    promedio = (precioUno + precioDos + precioTres) / 3;

    mensaje = "El promedio es de: " + promedio;

    alert(mensaje);




}
function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var iva;
    var precioFinal;
    var mensaje;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    
    precioDos = document.getElementById("txtIdPrecioDos").value;
    
    precioTres= document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres= parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;

    iva = suma *21 / 100;

    precioFinal = suma + iva;

    mensaje = "El precio final es de: " + precioFinal;

    alert(mensaje);
}



//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres
//parseint no funciona con numeros decimales
// parceFloat si funciona con decimales
// despues del resultado del promedio si pongo .toFixed() puedo limitar el numero de decimales que se muestran al final
// es recomendable poner el .toFixed al momento de ejecutar el mensaje ya que sino perderiamos la presicion decimal del numero entero 
// las variables globales generan acoplamiento y codigo poco seguro porque el dia que esa variable deje de existir voy a tener que hacer un monton de modificaciones dentro del programa
//15:17 clase 3




// dojo programacion
/*
Nuñez, Ignacio Natanel, DIV Z
Ejercicio TP 1

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).


function Sumar () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let resultadoSuma;
	let mensaje;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	resultadoSuma = precioUno + precioDos + precioTres; 

	mensaje = ("El total de la suma es de " + resultadoSuma);

	alert(mensaje);
}
function Promedio () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let resultadoSuma;
	let promedioTotal;
	let mensaje;

	precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
	precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

	resultadoSuma = (precioUno + precioDos + precioTres);
	promedioTotal = resultadoSuma / 3;
	//resultadoPromedio = resultadoPromedio.toFixed (2);

	mensaje = "El promedio es " + promedioTotal.toFixed(2);

	alert(mensaje);  
}

function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumaDePrecios;
	var iva;
	var precioConIva;
	var mensaje;

	precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
	precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
	
	sumaDePrecios = precioUno + precioDos + precioTres;
	iva = sumaDePrecios * 0.21;
	precioConIva = sumaDePrecios + iva;

	mensaje = "El precio final es: $" + precioConIva.toFixed(2);

	alert(mensaje); 

}
*/ 