/*
NO ES EL EJERCICIO ORIGINAL, ayer queria practicar mas el IF y quise poner mas opciones que las que me pedia el ejercicio original
Pose, Enzo
Ejercicio If 08
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
ENTREGADO
*/
function mostrar()
{
	var edad;
	var estadoCivilIngresado;
	var mensaje;

	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	estadoCivilIngresado = document.getElementById("estadoCivil").value;

	if(edad < 18)
	{
		if(estadoCivilIngresado == "Soltero")
		{
			mensaje = "Esta bien para tu edad";
		}
		else
		{
			if(estadoCivilIngresado == "Casado" || estadoCivilIngresado == "Divorciado")
			{
				mensaje = "A menos que vivas en el Líbano, deberias calmarte un poco";
			}	
		}
	
	}
	else
	{
		
		if(estadoCivilIngresado == "Soltero")
		{
			mensaje = "No te preocupes bro ya vas a encontrar pareja";
		}
		
		else 
		{
			if(estadoCivilIngresado == "Casado")
			{
				mensaje ="Bien ahi bro";
			}
			else
			{
				mensaje = "No te hagas mala sangre hay muchos peces en el mar";
			}
		}
			
		
	
	}
	
	alert(mensaje)
}
/*
MI CONSIGNA 
menor soltero = esta correcto para su edad
menor casado  = incorrecto para su edad
menor divorciado = incorrecto para su edad
mayor soltero = no te preocupes ya vas a encontrar algo
mayor casado = bien ahi bro
mayor divorciado = hay muchos peces en el mar

*/

/*

EJERCICIO COMPLETO 

	var edad;
	var estadoCivil;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	estadoCivil = document.getElementById("estadoCivil").value;


	if(edad > 17 && estadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor.");
	}
	else
	{
		if(edad < 18 && estadoCivil != "Soltero")
	{

	}
	}
*/
/*	
	var edad;
	var estadoCivilIngresado;
	var mensaje;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	estadoCivilIngresado = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadoCivilIngresado == "Soltero")
	{
		mensaje = "Esta bien para tu edad";
	}
	else
	{
		if(estadoCivilIngresado == "Casado" || "Divorciado")
		{
			mensaje = "A menos que vivas en el Líbano, deberias calmarte un poco";
		}		
		else
		{
			if(edad > 17 && estadoCivilIngresado == "Soltero")
			{	
				mensaje = "No te preocupes bro ya vas a encontrar pareja";
			}	
			else
			{
				if(estadoCivilIngresado == "Casado")
				{
					mensaje ="Bien ahi bro";
				}
				else
				{
					mensaje = "No te hagas mala sangre hay muchos peces en el mar";
				}
			}

		}
	}
	
	alert(mensaje);
	

*/

/*
	if
	{
		
	}
	else if
	{

	}
///////////////////////
	if
	{

	}
	else
	{
		if
		{

		}
	}
*/
/*
	var edad;
	var estadoCivilIngresado;
	var mensaje;

	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	estadoCivilIngresado = document.getElementById("estadoCivil").value;

	if(edad < 18)
	{
		if(estadoCivilIngresado == "Soltero")
		{
			mensaje = "Esta bien para tu edad";
		}
		else
		{
			if(estadoCivilIngresado == "Casado" || "Divorciado")
			{
				mensaje = "A menos que vivas en el Líbano, deberias calmarte un poco";
			}	
		}
	
	}
	if(edad > 17 )
	{	
		if(estadoCivilIngresado == "Soltero")
		{
			mensaje = "No te preocupes bro ya vas a encontrar pareja";
		}
		
		else 
		{
			if(estadoCivilIngresado == "Casado")
			{
				mensaje ="Bien ahi bro";
			}
			else
			{
				mensaje = "No te hagas mala sangre hay muchos peces en el mar";
			}
		}
		
	}
	
	alert(mensaje)
*/
