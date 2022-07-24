/*3.
Pose, Enzo DIV Z
Trabajo practico E/S 03
Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var gradosFar;
    var gradosCelsius;
    var mensaje;

    gradosFar = document.getElementById("txtIdTemperatura").value;
    gradosFar = parseInt(gradosFar);
    gradosCelsius = (gradosFar - 32) * 5/9;
    mensaje = (gradosFar +  "º Fahrenheit son " + gradosCelsius.toFixed(0) + "º centigrados");
    
    alert(mensaje);

}

function CentigradosFahrenheit () 
{
	var gradosCelsius;
    var gradosFar;
    var mensaje

    gradosCelsius = document.getElementById("txtIdTemperatura").value;
    gradosCelsius = parseInt(gradosCelsius);
    gradosFar = gradosCelsius * 9/5 + 32;
    mensaje = (gradosCelsius.toFixed(0) +  "º centigrados " + gradosFar + "º Fahrenheit son"); 

    alert(mensaje);

}

/*
txtIdTemperatura

*/