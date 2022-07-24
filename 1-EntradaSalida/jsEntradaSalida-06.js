/*
Pose, Enzo DIV Z
Ejercicio E/S 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1 = parseInt(txtIdNumeroUno.value);
    numero2 = parseInt(txtIdNumeroDos.value);

	resultado = numero1 + numero2;
   

	alert(resultado);


}

//txtIdNumeroUno
//txtIdNumeroDos
//string + string = string
//numero + numero = numero
//string + numero = string
//numero + string = string
//string es todo lo que es un texto literal y esta entrr ""
//parseint agarra una cadena y la pasa a un entero