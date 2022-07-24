/*
Pose, Enzo DIV Z
Ejercicio E/S 10
E/S 10 bis: Se pedirá el importe del descuento por prompt. Además se deberá mostrar por alert el siguiente mensaje: "Ud obtuvo un descuento de $xx"
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var precio;
	var mensaje;

	importe = prompt("Ingrese el precio del producto");

	importe = parseInt(importe);

	descuento = importe *15 / 100;

	precio = importe - descuento;

	mensaje = "EL PRECIO FINAL CON DESCUENTO ES DE: " + precio;

	alert(mensaje);
}



/*
var importe;
	var descuento;
	var resultado;

    importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

    descuento = importe * 25 / 100;
	resultado = importe - descuento;
 
	document.getElementById("txtIdResultado").value = resultado;
*/
//txtIdImporte
//txtIdResultado