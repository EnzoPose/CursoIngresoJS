/*
Pose, Enzo DIV Z
Ejercicio If 03
Al ingresar una edad debemos informar 
si la persona es mayor de edad, sino informar que es un menor de edad.
ENTREGADO
*/
function mostrar()
{
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 18)
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		alert("Usted es menor de edad");
	}
	/*if(edad < 18)
	{
		alert("Usted es menor de edad")
	}
	*/
}
//else = sino
// elsse va justo despues de if sin aclarar la condicional