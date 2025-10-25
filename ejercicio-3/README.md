#ejercicio 3 - integracion con el docker composse

#comandos
docker compose up -d --build
curl http://localhost:3001/
curl http://localhost:3001/health
curl http://localhost:3001/db-test
tuve que cambiar del puerto 3000 al 3001 por conflictos que hicieron revertir cambios

