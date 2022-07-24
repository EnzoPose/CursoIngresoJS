/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var promedio;
	var numeroIngresado;

	contador = 0;
	acumulador = 0;
	while(contador < 5)
	{
		contador ++;
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		acumulador += numeroIngresado; 
	}

	promedio = acumulador / contador;
	
	txtIdPromedio.value = promedio;
	txtIdSuma.value = acumulador;
}


//acumulador = numeroIngresado + acumulador |
                                        //  |ES LO MISMO 
//acumulador += numeroIngresado	            |