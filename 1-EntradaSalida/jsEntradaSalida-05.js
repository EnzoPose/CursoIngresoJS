/*
Pose, Enzo DIV Z
Ejercicio E/S 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
 var nombreIngresado;    
 var edadIngresada;
 var mensaje; 
  
   nombreIngresado = txtIdNombre.value;
   edadIngresada = txtIdEdad.value;

   mensaje = "Ud se llama " + nombreIngresado + " y tiene " + edadIngresada + " años";

   alert(mensaje);

}

//txtIdNombre
//txtIdEdad
//nombreIngresado = document.getElementById("textIdNombre").value