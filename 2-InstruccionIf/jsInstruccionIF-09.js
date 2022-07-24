/*
Pose, Enzo DIV Z
Ejercicio If 09
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
ENTREGADO
*/
function mostrar()
{
    var numero;
    numero = (Math.floor(Math.random()*10)+1);
    alert(numero);
}
//math.floor redondea siempre para abajo
//math.round redondea bien como toda la vida u know
//console.log te muestra el resultado en consola en vez de en un alert