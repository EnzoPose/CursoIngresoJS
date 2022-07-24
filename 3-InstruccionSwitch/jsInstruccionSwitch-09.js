/*
Pose, Enzo DIV Z
Ejercicio 09 switch
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base,
 se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var precioBase;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	precioBase = 15000;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					precioBase =  precioBase * 1.20;
					break;
				
				case "Cataratas":
				case "Cordoba":
					precioBase = precioBase * 0.9;
					break;
				
				case "Mar del plata":
					precioBase = precioBase * 0.8;
					break;
			}
			break;
		
		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					precioBase =  precioBase * 0.8;
					break;
				
				case "Cataratas":
				case "Cordoba":
					precioBase = precioBase * 1.10;
					break;
				
				case "Mar del plata":
					precioBase = precioBase * 1.20;
					break;
			}
			break;

		case "Otoño":
		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					precioBase =  precioBase * 1.1;
					break;
				
				case "Cordoba":
					break;
			}

	}
	alert("El precio de la estadia es de " + precioBase);
}

/*
var aumento;
var descuento;
var precio;

aumento = 0;
descuento = 0;

aumento = precio * aumento / 100;
descuento = precio * descuento / 100;
precio = precio + aumento - descuento;
*/