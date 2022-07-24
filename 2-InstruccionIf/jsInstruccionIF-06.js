/*
Pose, Enzo
Ejercicio If 06
Al ingresar una edad debemos informar si la persona es mayor de edad 
(mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
ENTREGADO
*/
function mostrar()
{

	var edad;
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		mensaje = "Usted es mayor de edad";
	}
	else
	{
		if(edad > 12)
		{
			mensaje = "Usted es adolescente";
		}
	else
	{
		mensaje = "Usted es un niño";
	}

	}
	alert(mensaje);


}
/*
	if(edad > 12 && edad < 18)
	{
		alert("Usted es un adolescente");
	}

	if(edad < 13)
	{
		alert("Usted es un niño");
	}

	function mostrar()

{
	var edad;
	var mensaje;
	edad = document.getElementById("txtIdEdad").value;

	if(edad > 17)
	{
		mensaje = "Usted es mayor de edad";
	}
	else
	{
		if(edad > 12)
		{
			mensaje = "Usted es un adolescente";
		}
		else
		{
			mensaje = "Usted es un niño";
		}
	}
	
	alert(mensaje);
}

*/