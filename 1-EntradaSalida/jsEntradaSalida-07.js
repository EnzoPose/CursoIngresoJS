/*
Pose, Enzo DIV Z
Ejercicio E/S 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var n1;
	var n2;
	var resultado;
	var mensaje;
    
	n1 = parseInt(txtIdNumeroUno.value);
	n2 = parseInt(txtIdNumeroDos.value);

	resultado = (n1 + n2);
	mensaje = "El sesultado es: " + resultado;

	alert(mensaje);
}

function restar()
{
	var n1; 
	var n2;
	var resultado;
	var mensaje;

    n1 = parseInt(txtIdNumeroUno.value);
	n2 = parseInt(txtIdNumeroDos.value);

	resultado = (n1 - n2);
	mensaje = "El resultado es: " + resultado;

	alert(mensaje);
}

function multiplicar()
{ 
	var n1;
	var n2;
    var resultado;
	var mensaje;

	n1 = parseInt(txtIdNumeroUno.value);
	n2 = parseInt(txtIdNumeroDos.value);

	resultado = (n1 * n2);
	mensaje = "El resultado es: " + resultado;

	alert(mensaje);
}

function dividir()
{
	var n1;
	var n2;
	var resultado;
	var mensaje;	
    
	n1 = parseInt(txtIdNumeroUno.value);
	n2 = parseInt(txtIdNumeroDos.value);

    resultado = (n1 / n2);
    mensaje = "El resultado es: " + resultado;

	alert(mensaje);
}

//txtIdNumeroUno
//txtIdNumeroDos