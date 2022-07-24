/*
Pose, Enzo DIV Z
Ejercicio If 07
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
 ENTREGADO
*/
function mostrar()
{
	var edad;
	var estadoCivilIngresado;
	var mensaje;
	

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estadoCivilIngresado = document.getElementById("estadoCivil").value;
	
	if(edad < 18 && estadoCivilIngresado != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}

	


}
//txtIdEdad
//soltero = document.getElementsByTagName("Soltero").value;
//if(edad < 18 && estadoCivil != document.getElementsByTag("Soltero").value)
//var soltero;
/*
if(edad > 17 && estadoCivil != "Soltero")
	{
		alert("mal ahi bro");
	}
*/