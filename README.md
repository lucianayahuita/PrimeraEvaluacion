# PrimeraEvaluacion
Paso 1: INSTALAR MONGODBCOMPASS
 Instalar mongodbcompass en tu pc desde su sitio oficial: https://www.mongodb.com/try/download/compass

Paso 2: CREACIÓN DE LA BASE DE DATOS Y COLECCIONES
 Abrir mongodbcompass y asegurarse que la conexion esté correcta y tenga el nombre: 'tienda' con dos colecciones (usuarios y productos). En el apartado de import, subir los documentos en formato json en cada respectiva coleccion.

Paso 3: DEPENDENCIAS
 instalar las dependencias necesarias para el proyecto con el siguiente comando: npm install

Paso 4: INICIAR EL SERVIDOR
 Iniciar el servidor con el siguiente comando: npm start. Saldrá un mensaje de en que puerto se está levantando la app. 'Servidor corriendo en http://localhost:9000'
 'Conectado a MongoDB (Base de datos: tienda)'

Paso 5 ENDPOINTS de la app
Método	        Endpoint	           Descripción
GET	         /api/usuarios	    Obtener todos los usuarios
POST	     /api/usuarios	      Crear un nuevo usuario
PUT	       /api/usuarios/:id	Actualizar un usuario por ID
DELETE	   /api/usuarios/:id	Eliminar un usuario por ID
GET	       /api/productos	      Obtener todos los productos
POST	   /api/productos	      Crear un nuevo producto
PUT	     /api/productos/:id	     Actualizar un producto por ID
DELETE	 /api/productos/:id	      Eliminar un producto por ID
GET	         /contadores	    Obtener cantidad de usuarios y productos
GET	         /operaciones	 Obtener estadísticas de operaciones realizadas
