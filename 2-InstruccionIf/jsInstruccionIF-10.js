/*
Pose, Enzo DIV Z
Ejercicio If 10
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{
	var numero;
	var mensaje;

    numero = (Math.floor(Math.random()*10)+1);
    
	if(numero > 8)
	{
		mensaje = ("EXELENTE: " + numero);
	}
	else
	{
		if(numero > 3)
		{
			mensaje =("APROBÓ: " + numero);
		}
		else
		{
			mensaje = ("Vamos, la proxima se puede: " + numero);
		}

	}
	//alert(mensaje);
	console.log(mensaje);

}
//FIN DE LA FUNCIÓN
//console.log(mensaje); sirve para ver el resultado desde la consola y que sea mas facil de probar