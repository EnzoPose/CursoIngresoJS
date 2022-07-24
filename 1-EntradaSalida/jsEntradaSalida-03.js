/*
Pose, Enzo DIV Z
Ejercicio E/S 2
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	nombreIngresado = txtIdNombre.value;

	alert("Su nombre es: " + nombreIngresado);
	
}


//txtIdNombre se saca haciendo click derecho al globo de texto de donde se quiere sacar la informacion
// se pone el .value al final para obtener una informacion especifica del text id
//D.O.M conjunto de tecnicas para acceder a objetos html
// nombreIngresado = document.getElementById("textIdNombre").value; (metodo mas profesional)