/*
Pose, Enzo DIV Z
Ejercicio 05 switch
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
ENTREGADO
*/
function mostrar()
{
	var horaIngresada;
	var mensaje;
	horaIngresada = document.getElementById("txtIdHora").value;
	
	switch (horaIngresada) {
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			mensaje = "Es de mañana.";
			break;
	}
	alert(mensaje);



}//FIN DE LA FUNCIÓN