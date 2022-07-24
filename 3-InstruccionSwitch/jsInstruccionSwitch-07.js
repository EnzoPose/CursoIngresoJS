/*
Pose, Enzo DIV Z
Ejercicio 01 switch
Al selecionar un destino , indicar el punto cardinal de nuestro pais
 en donde se encuentra Norte, Sur, Este u Oeste
 ENTREGADO

*/
function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
			mensaje = "Esta en el oeste";
			break;
		case "Cataratas":
			mensaje = "Esta en el norte";
			break;
		case "Mar del plata": 
			mensaje = "Esta en el este";
			break;
		default:
			mensaje = "Esta en el sur";
			break;
	}
	alert(mensaje);



}//FIN DE LA FUNCIÓN
//bariloche oeste
//cataratas norte
//mar del plata este
//usuahia sur