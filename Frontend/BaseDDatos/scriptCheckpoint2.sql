/*1. Listar todos los clientes que su apellido empiece por A, ordenados por apellido
de manera ascendente.*/
SELECT * FROM clientes
where apellidos like 'A%';
/*2. Listar nombre, apellido,dirección de aquellos clientes que en su dirección
contengan la palabra “martin”.*/
SELECT nombres, apellidos,direccion FROM clientes
where direccion like '%martin%';
/*3. Listar todos los hoteles que tengan de 30 a 60 habitaciones.*/
SELECT * FROM hoteles
where cantidadHabitaciones between 30 and 60;
/*4. Mostrar cuál ha sido el mayor importe facturado y llamarlo “Precio Mayor”,
también mostrar cuál es el total facturado y llamarlo “TOTAL”.*/
SELECT max(precioTotal) as 'Precio Mayor', sum(precioTotal) as 'TOTAL' FROM pagos;
/*5. Listar las reservas que fueron realizadas el día 16/01/2022 entre las 15hs y las
21hs pertenecientes a la sucursal número 5.*/
SELECT * FROM reservas
where idSucursal = 5 
and fechaRegistro between '2022/01/16 15:00' and '2022/01/16 21:00';
/*6. Mostrar el top 3 de reservas con mayor cantidad de vuelos.*/
 SELECT idReserva, COUNT(*) as cantidad FROM vuelosxreserva GROUP BY idReserva ORDER BY COUNT(*) DESC LIMIT 3;
 /*7. Listar los 10 pagos de menor precio.*/
 SELECT * FROM pagos 
 order by precioTotal
 limit 10;
 /*8. Listar todos los países ordenados alfabéticamente y con su nombre en
mayúsculas.*/
SELECT upper(nombre) FROM paises
order by nombre;
/*9. Mostrar todos las reservas de vuelos que sean de clase turista y el id de vuelo
sea 11 o 13.*/
SELECT * FROM vuelosxreserva
where idCategoriasVuelos=1 and idVuelo in (11,13);
/*10. Listar los usuarios que hayan realizado 2 reservas.*/
SELECT idcliente, count(*) as cantidad FROM reservas group by idCliente
having count(*) = 2;
/*11. Mostrar todos los vuelos que tengan como origen Italia o destino Jamaica.*/
SELECT * FROM vuelos 
where origen = 'Italia' or destino = 'Jamaica';
/*12. Mostrar todos los vuelos que tengan como destino Cuba y la cantidad de
pasajeros de primera clase sea menor o igual a 15 personas.*/
SELECT * FROM vuelos 
where destino = 'Cuba' and cantidadPrimeraClase <= 15;
/*13. Se desea conocer cuál es la cantidad de vuelos que tienen como origen México*/
SELECT count(*) FROM vuelos 
where origen = 'México';
/*14. Se desea conocer cuál es la cantidad de reservas realizadas en la sucursal de
Mendoza por el cliente cuyo pasaporte es EC158846.*/
SELECT * FROM reservas
where idSucursal = 1 and idCliente = 13;







