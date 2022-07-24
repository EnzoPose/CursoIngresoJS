/*
Pose, Enzo DIV Z
Ejercicio clase repaso
Ingresar el valor del dólar oficial y el valor del dólar blue.
Mostrar la diferencia expresada en porcentaje entre una cotización y otra.

*/
function SacarResto()
{
	
		var dolarOf;
		var dolarBlue;
		var resta;
		var division;
		var resultadoFinal;
		var mensaje;
		
		dolarOf = document.getElementById("txtIdNumeroDividendo").value;
		dolarBlue = document.getElementById("txtIdNumeroDivisor").value;
        
		parseFloat(dolarOf);
		parseFloat(dolarBlue);
		
		resta = dolarBlue - dolarOf;
		division = resta / dolarOf;
		resultadoFinal = division * 100;
		mensaje = "La diferencia es de: " + resultadoFinal.toFixed(0) + "%";

		alert(mensaje);

		

			
}
//txtIdNumeroDividendo
//txtIdNumeroDivisor
/*var dividendo; 
	var divisor;
    var resultado;
	var mensaje;

	dividendo = parseInt(txtIdNumeroDividendo.value);
	divisor = parseInt(txtIdNumeroDivisor.value);
	
	resultado = dividendo % divisor;
    
	mensaje = "El resto es: " + resultado;
 	
	alert(mensaje)
	
	dolarOf = document.getElementById("txtIdNumeroDividendo)").value;
			dolarBlue = document.getElementById("txtIdNumeroDivisor").value;

			dolarOf = parseInt(dolarOf);
			dolarBlue = parseInt(dolarBlue);

			diferencia = (dolarBlue / dolarBlue)* 100;
			resultadoFinal = (diferencia -100);
			mensaje = "La diferencia es de: " + resultadoFinal + "%";
		    
			alert(mensaje);
	
	*/
