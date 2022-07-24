/*4.	
Pose, Enzo DIV Z 
TP 4 IF 
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadLamparas;
    var precioUnidad;
    var precioTotal;
    var marcaIngresada;
    var descuento;
    var mensaje;
    var impuesto;
    
    precioUnidad = 35;
    
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marcaIngresada = document.getElementById("Marca").value;

    precioTotal = cantidadLamparas * precioUnidad;

    if(cantidadLamparas > 5)
    {
        descuento =  50 / 100;
    }
    else
    {
        if(cantidadLamparas == 5)
        {
            if(marcaIngresada == "ArgentinaLuz")
            {
                descuento =  40 / 100;
            }
            else
            {
                descuento =  30 / 100;
            }
        }
        else
        {
            if(cantidadLamparas == 4)
            {
                if(marcaIngresada == "ArgentinaLuz" || marcaIngresada == "FelipeLamparas")
                {
                    descuento =  25 / 100;
                }
                else
                {
                    descuento = 20 / 100;
                }
            }
            else
            {
                if(cantidadLamparas == 3)
                {
                    if(marcaIngresada == "ArgentinaLuz")
                    {
                        descuento = 15 / 100;
                    }
                    else
                    {
                        if(marcaIngresada == "FelipeLamparas")
                        {
                            descuento = 10 / 100;
                        }
                        else
                        {
                            descuento = 5 / 100;
                        }
                        
                    }
                }
                else
                {
                    if( cantidadLamparas < 3)
                    {
                        descuento = 0 / 100;
                    }
                }
            }
        }
    }
    descuento = precioTotal * descuento
    precioTotal = precioTotal - descuento;

    if(precioTotal > 119)
    {
        impuesto = precioTotal * 10/ 100;
        precioTotal = precioTotal + impuesto;
        alert("IIBB Usted pago: " + impuesto);   
    }

    mensaje = precioTotal;
    document.getElementById("txtIdprecioDescuento").value = mensaje;
}
/*
    Marca
    txtIdCantidad
    txtIdprecioDescuento
    
    Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
*/
/*
var cantidadLamparas;
    var precioUnidad;
    var precioTotal;
    var mensaje;
    
    precioUnidad = 35;
    
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
   
    precioTotal = cantidadLamparas * precioUnidad;

    if(cantidadLamparas > 5)
    {
        precioTotal = precioTotal / 2
        mensaje = precioTotal
    }
    
    document.getElementById("txtIdprecioDescuento").value = mensaje;

    
*/
/*
function CalcularPrecio () 
{
 	var cantidadLamparas;
    var precioUnidad;
    var precioTotal;
    var marcaIngresada;
    var descuento;
    var mensaje;
    var impuesto;
    
    precioUnidad = 35;
    
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marcaIngresada = document.getElementById("Marca").value;

    precioTotal = cantidadLamparas * precioUnidad;

    if(cantidadLamparas > 5)
    {
        precioTotal = precioTotal / 2;
    }
    else
    {
        if(cantidadLamparas == 5)
        {
            if(marcaIngresada == "ArgentinaLuz")
            {
                descuento = precioTotal * 40 / 100;
                precioTotal = precioTotal - descuento;
            }
            else
            {
                descuento = precioTotal * 30 / 100;
                precioTotal = precioTotal - descuento;
            }
        }
        else
        {
            if(cantidadLamparas == 4)
            {
                if(marcaIngresada == "ArgentinaLuz" || marcaIngresada == "FelipeLamparas")
                {
                    descuento = precioTotal * 25 / 100;
                    precioTotal = precioTotal - descuento;
                }
                else
                {
                    descuento = precioTotal * 20 / 100;
                    precioTotal = precioTotal - descuento;
                }
            }
            else
            {
                if(cantidadLamparas == 3)
                {
                    if(marcaIngresada == "ArgentinaLuz")
                    {
                        descuento = precioTotal * 15 / 100;
                        precioTotal = precioTotal - descuento;
                    }
                    else
                    {
                        if(marcaIngresada == "FelipeLamparas")
                        {
                            descuento = precioTotal * 10 / 100;
                            precioTotal = precioTotal - descuento;
                        }
                        else
                        {
                            descuento = precioTotal * 5 / 100;
                            precioTotal = precioTotal - descuento;
                        }
                        
                    }
                }
            }
            
        }
    }
    if(precioTotal > 119)
    {
        impuesto = precioTotal * 10/ 100;
        precioTotal = precioTotal + impuesto;
        alert("IIBB Usted pago: " + impuesto);   
    }
    mensaje = precioTotal;
    document.getElementById("txtIdprecioDescuento").value = mensaje;
}
*/
