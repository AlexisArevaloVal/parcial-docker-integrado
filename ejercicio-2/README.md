ejercicio 2 persistencia con el postgreSQL

#el objetivo
poder crear o mas bien configurar la base de datos con postgreSQL con volumen para ver su persistencia de datos

#comandos usados
crear volumen: docker volume create db_data
docker run -d \
  --name postgres-db \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=12345 \
  -e POSTGRES_DB=parcial_db \
  -v db_data:/var/lib/postgresql/data \
  -p 5432:5432 \
  postgres:13
podemos uar el sleep 30 esto hace que se inicialice en 30 segundos
luego para crear la tabal y los datos se usa docker exec -it postgres-db psql -U admin -d parcial_db -c "
CREATE TABLE estudiantes (
 aca este apartado de usa el id serial primary key, nombre varchar(100), expediente varchar(50); aca los datos para la tabla van a variar segun lo que las personas o usuarios quieran poner

para verificar los datos docker exec -it postgres-db psql -U admin -d parcial_db -c "SELECT * FROM estudiantes;"

para probar la persistencia
docker restart postgres-db
sleep 15

docker exec -it postgres-db psql -U admin -d parcial_db -c "SELECT * FROM estudiantes;"
