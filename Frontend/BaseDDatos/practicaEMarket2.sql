/*Ejercicio 1

1. Crear una vista para poder organizar los envíos de las facturas. Indicar número
de factura, fecha de la factura y fecha de envío, ambas en formato dd/mm/yyyy,
valor del transporte formateado con dos decimales, y la información del
domicilio del destino incluyendo dirección, ciudad, código postal y país, en una
columna llamada Destino.

3. ¿Qué dificultad o problema encontrás en esta consigna? Proponer alguna
alternativa o solución.*/
SELECT * FROM emarket.facturas;

create view envios1 as
select 
FacturaID,
date_format(FechaFactura, "%d-%m-%Y") as FechaFactura,
date_format(FechaEnvio, "%d-%m-%Y")as FechaEnvio,
round(Transporte,2) as ValorTransporte,
concat(DireccionEnvio,' - ',CiudadEnvio,' - ',CodigoPostalEnvio,' - ',PaisEnvio) as Destino
from facturas;

select * from envios1;

/*2. Realizar una consulta con todos los correos y el detalle de las facturas que
usaron ese correo. Utilizar la vista creada.*/

select * 
from correos
right join facturas
on facturas.EnvioVia = correos.CorreoID
group by Compania