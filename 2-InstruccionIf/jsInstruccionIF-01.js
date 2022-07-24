/*
Pose, Enzo DIVZ
Ejercicio If 01
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
ENTREGADO
*/
function mostrar()
{
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad == 15)
	{

		alert("Niña bonita");

	}

	if(edad != 15)
	{

		alert("Suerte la proxima");

	}
}
/*
verdadero o falso
true o false / calquier numero distinto de 0 es true / 0 es false
!= distinto
== igual
< menor
> mayor 
<= menor o igual
>= mayor o igual
&& AND
|| OR
! NOT
*/