/*
Pose, Enzo DIV Z
Ejercicio If 05
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
ENTREGADO	
*/
function mostrar()
{
	var edad;
	edad = document.getElementById("txtIdEdad").value;

	if(edad < 13 || edad > 17)
	{
		alert("Usted no es un adolescente");
	}
}

/*
if(!(edad > 12 && edad < 18))
{
	alert("No sos adolescente");
}

|| -> con que UNA condicion se cumpla entra al IF
&& -> Se deben cumplir todas las condiciones para entrar al IF 
*/ 