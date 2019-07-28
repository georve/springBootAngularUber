# springBootAngularUber
Proyecto que emula la reservacion de taxis por medio una aplicacion web.
El proyecto consta de dos parte el FrontEnd: Angular8 y el Backend Spring Boot:
Por la naturaleza del proyecto es necesario compilar todo los modulos para hacer una integracion de ambos proyectos
1. El proyecto se enlaza con una base de datos Mysql 5.7 y este debe tener creada la base de datos uterjpa a la cual
se conecta.
2. Para la compilacion del proyecto se hace por medio mvn clean install para correr todas la dependencias.
3. Para correr el Front se debe colocar en la raiz de angular cd /springBootAngularUber/UterAngular/src/main/web/
    y ejecutar ng serve -o para correr el front.
    
4. Para correr el Backend que esta en Spring-Boot cd /springBootAngularUber/UterApplication/
    mvn spring-boot:run y alli se levanta los servicios rest.
