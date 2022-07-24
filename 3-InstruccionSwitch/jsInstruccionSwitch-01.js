/*
Pose, Enzo DIV Z
Ejercicio 01 switch
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
ENTREGADO
*/
function mostrar()
{
	var mesIngresado;
	var mensaje;

	mesIngresado = document.getElementById("txtIdMes").value;

	switch (mesIngresado) {
		case "Enero":
			mensaje = "que comiences bien el año!!!.";
			break;

		case "Marzo":
			mensaje = "a clases!!!.";
			break;

		case "Julio":
			mensaje = "se vienen las vacaciones!!!.";
			break;

		case "Diciembre":
			mensaje = "Felices fiesta!!!.";
			break;

	}

	alert(mensaje);
}

//txtIdMes
/*
switch palabra reservada (key) valor variable key {
		case caso al cual le pasamos un valor value: valor
			
			break; corta la ejecucion, como en el if, si no cumple el caso y sigue con el siguiente
	
		default: predeterminado (parecido a un else)
			break;
	}
*/
