/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("error, ingrese f ó m .");
	}
	if(sexoIngresado == "f")
	{
		txtIdSexo.value = "Femenino";
	}
	else
	{
		txtIdSexo.value = "Masculino";
	}

	
}//FIN DE LA FUNCIÓN