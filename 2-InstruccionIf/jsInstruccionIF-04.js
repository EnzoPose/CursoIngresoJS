/*
Pose, Enzo DIV Z
Ejercicio If 04
Al ingresar una edad debemos informar si la persona es 
adolescente, edad entre 13 y 17 años (inclusive) .
ENTREGADO
*/
function mostrar()
{
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 13 && edad <= 17)
	{
		alert("Usted es un adolescente");
	}
}