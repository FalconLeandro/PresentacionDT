SELECT upper(LEFT(NOMBRE,10)) as CANCION,
concat(timestampdiff(YEAR,publicada,now()),' años') as ANTIGUEDAD,
round(bytes/1024) as KBYTES,
concat('$ ',truncate(precio_unitario,3) ) as PRECIO,
case
	when compositor is null or compositor=' ' then '<sin datos>'
	else left(compositor, locate(',', compositor)-1) 
end as COMPOSITOR 
FROM musimundos2.canciones
