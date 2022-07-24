/*
Pose, Enzo DIV Z
Ejercicio 02 switch
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
ENTREGADO

*/
function mostrar()
{
	var mesIngresado;
	var mensaje;

	mesIngresado = document.getElementById("txtIdMes").value;


	switch (mesIngresado) {
		
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno.";
			break;

		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
			break;
	}
	alert(mensaje);	
}
/*
		case "Julio":
		case "Julio":
		case "Julio":
		case "Julio":
		case "Julio":
		case "Julio":
		case "Julio":
		case "Julio":
		
*/