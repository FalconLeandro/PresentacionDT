-- Clientes

/*1. Crear una vista con los siguientes datos de los clientes: ID, contacto, y el
Fax. En caso de que no tenga Fax, colocar el teléfono, pero aclarándolo. Por
ejemplo: “TEL: (01) 123-4567”.*/

create view punto1 as 
select ClienteID, 
Contacto,
case
	when fax = ' ' then concat('Tel: ',telefono)
    else fax
end as Fax
from clientes;
select * from punto1;
drop view punto1;

/*2. Se necesita listar los números de teléfono de los clientes que no tengan
fax. Hacerlo de dos formas distintas:
a. Consultando la tabla de clientes.
b. Consultando la vista de clientes.*/
select telefono,fax from clientes
where fax = '';

select fax from punto1
where fax like 'T%';

-- Proveedores

/*1. Crear una vista con los siguientes datos de los proveedores: ID,
contacto, compañía y dirección. Para la dirección tomar la dirección,
ciudad, código postal y país.*/
create view proveedores1 as 
select ProveedorID,
Contacto,
Compania,
concat(Direccion,' - ',Ciudad,' - ',CodigoPostal,' - ',Pais) as Direccion
from proveedores;
select * from proveedores1;

/*2. Listar los proveedores que vivan en la calle Americanas en Brasil. Hacerlo
de dos formas distintas:
a. Consultando la tabla de proveedores.
b. Consultando la vista de proveedores.*/

select ProveedorID,Direccion,Pais from proveedores
where Pais = 'Brazil' and Direccion like '%Americanas%';

select ProveedorID,Direccion from proveedores1 
where Direccion like '%Americanas%'

/*Vistas - Parte II
1. Crear una vista de productos que se usará para control de stock. Incluir el ID
y nombre del producto, el precio unitario redondeado sin decimales, las
unidades en stock y las unidades pedidas. Incluir además una nueva
columna PRIORIDAD con los siguientes valores:
■ BAJA: si las unidades pedidas son cero.
■ MEDIA: si las unidades pedidas son menores que las unidades
en stock.
■ URGENTE: si las unidades pedidas no duplican el número de
unidades.
■ SUPER URGENTE: si las unidades pedidas duplican el número
de unidades en caso contrario.*/

CREATE VIEW productos1 AS
SELECT ProductoID,
ProductoNombre, 
ROUND(PrecioUnitario,0) as PrecioUnitario, 
UnidadesStock, 
UnidadesPedidas,
CASE
	WHEN UnidadesPedidas = 0 THEN 'BAJA'
    WHEN UnidadesPedidas < UnidadesStock THEN 'MEDIA'
    WHEN UnidadesPedidas < (2*UnidadesStock) THEN 'URGENTE'
    ELSE 'SUPER URGENTE'
END AS PRIORIDAD
FROM productos;
select * from productos1;

/*2. Se necesita un reporte de productos para identificar problemas de stock.
Para cada prioridad indicar cuántos productos hay y su precio promedio.
No incluir las prioridades para las que haya menos de 5 productos.*/

select PRIORIDAD,
sum(UnidadesStock) AS stock, 
avg(PrecioUnitario)
from productos1 
group by PRIORIDAD
having stock > 5;



    







