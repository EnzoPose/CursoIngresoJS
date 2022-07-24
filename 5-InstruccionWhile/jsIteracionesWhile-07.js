/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var promedio;
	var numeroIngresado;
	var respuesta;

	respuesta = true;
	contador = 0;
	acumulador = 0;
	while(respuesta)//while(respuesta == "Si" || respuesta == "si") 
	{
		contador ++;
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		acumulador += numeroIngresado; 
		respuesta = confirm("Desea continuar");
		// confirm es como un prompt pero da una respuesta de un booleano (true o false)
		// respuesta = prompt("Desea continuar")
	}


	promedio = acumulador / contador;
	
	txtIdPromedio.value = promedio;
	txtIdSuma.value = acumulador;

}//FIN DE LA FUNCIÓN