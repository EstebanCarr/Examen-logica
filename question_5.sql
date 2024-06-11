SELECT L.Nombres AS Libro
FROM ALUMNO A
JOIN PRESTAMO P ON A.Id_alumno
JOIN LIBRO L ON P.Id_libro = L.Id
WHERE A.Nombres = 'Sonia' AND P.Entregado = 'false'
 AND DATE_ADD(P.Fecha_prestamo, INTERVAL L.Dias_limite_prestamo DAY) < '2021-07-30';