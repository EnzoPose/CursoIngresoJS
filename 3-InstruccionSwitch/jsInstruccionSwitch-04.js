/*
Pose, Enzo DIV Z
Ejercicio 04 switch
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar()
{
	var mesIngresado =txtIdMes.value;
	var mensaje;

	switch (mesIngresado) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = "Este mes Tiene 31 dias";
			break;

		case "Abril":
		case "Junio":
		case "Semtiembre":
		case "Noviembre":
			mensaje = "Este mes tiene 30 dias";
			break;

		case "Febrero":
			mensaje = "Este mes tiene 28 dias";
			break;
		
	}
	alert(mensaje);
	
}
/*
"Enero"
"Febrero"
"Marzo"
"Abril"
"Mayo"
"Junio"
"Julio"
"Agosto"
"Septiembre"
"Octubre"
"Noviembre"
"Diciembre"
				
*/
				