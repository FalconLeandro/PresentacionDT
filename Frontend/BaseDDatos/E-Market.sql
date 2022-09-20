-- SELECT * FROM facturadetalle;

-- 1) ¿Cuántos clientes existen?

SELECT count(ClienteID) FROM emarket.clientes;

-- 2) ¿Cuántos clientes hay por ciudad?

SELECT Ciudad, count(ClienteID) as cantidad FROM emarket.clientes
group by Ciudad;

-- 1) ¿Cuál es el total de transporte?

SELECT sum(Transporte) as total FROM facturas;

-- 2) ¿Cuál es el total de transporte por EnvioVia (empresa de envío)?

SELECT EnvioVia, sum(Transporte) as total FROM facturas
group by EnvioVia;

-- 3) Calcular la cantidad de facturas por cliente. Ordenar descendentemente por
-- cantidad de facturas.

SELECT ClienteID, count(FacturaID) as cantidadFacturas FROM facturas
group by ClienteID
order by cantidadFacturas desc;

-- 4) Obtener el Top 5 de clientes de acuerdo a su cantidad de facturas.

SELECT ClienteID, count(FacturaID) as cantidadFacturas FROM facturas
group by ClienteID
order by cantidadFacturas desc
limit 5;
-- 5) ¿Cuál es el país de envío menos frecuente de acuerdo a la cantidad de facturas?

SELECT PaisEnvio, count(FacturaID) as cantidadFacturas FROM facturas
group by PaisEnvio
order by cantidadFacturas 
limit 1;

-- 6) Se quiere otorgar un bono al empleado con más ventas. ¿Qué ID de empleado
-- realizó más operaciones de ventas?

SELECT EmpleadoID, count(FacturaID) as cantidadventas FROM facturas
group by EmpleadoID
order by cantidadventas desc
limit 1;

-- 1) ¿Cuál es el producto que aparece en más líneas de la tabla Factura Detalle?

SELECT FacturaID, count(ProductoID) as cantidadproductos FROM facturadetalle
group by FacturaID
order by cantidadproductos desc
limit 1;

-- 2) ¿Cuál es el total facturado? Considerar que el total facturado es la suma de
-- cantidad por precio unitario.
-- 3) ¿Cuál es el total facturado para los productos ID entre 30 y 50?
