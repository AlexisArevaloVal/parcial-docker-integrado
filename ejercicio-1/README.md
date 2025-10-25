#en el primer ejercicio es el servicio de base con su dockerfilee
el objetivo que se tiene con esto es crear un servicio con su node.js y contenerizarlo donde es el dockerfile

#archivos del primer ejercicio
server.js
package.json
dockerfile
.dockerignore

#comandos a utilizar
 npm install
construir imagen del docker: docker build -t parcial-api .
ejecutar el contenedor: docker run -d -p 3000:3000 --name parcial-container parcial-api
para verificar el funcionamiento: curl http://localhost:3000/
curl http://localhost:3000/health
ya para ver los resultados o mas bien verificar se usa lo que es el comando de docker ps

