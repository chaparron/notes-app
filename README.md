# notes-app
aplicación completa de fazt con login y crud

https://www.youtube.com/watch?v=-bI0diefasA

Nombramos la carpeta "notes-app" e iniciamos el repositorio "npm init --yes"

->6:00 npm i express express-handlebars express-session method-override mongoose passport passport-local bcryptjs connect-flash

->10:00 Creamos directorios y archivos del proyecto

->13:47 Estructuramos el index js y ponemos en funcionamiento el servidor con express

->17:20 Instalamos nodemon, configuramos la carpeta de las vistas requiriendo path
	requerimos y configuramos handlebars

->23:46 urlencoded, methodOverride y express-session

->26:45 creamos los archivos rutas y los ponemos en routes en el index (index, notes y users)
		tiene que devolver un objeto router para que no de error al ejecutarse (aunque esté vacío de momento)	
	creamos el script de nodemon

->36:48 apuntamos a public con los archivos estáticos
	Configuramos database y lo requerimos desde inicializaciones

->41:25 Creamos el about, index y en carpeta users el signin y el signup hbs y los renderizamos en routes
	En el main creamos la plantilla dónde dejamos el body para modificar lo demás

->49:45 Trabajamos un poco en el index el main y el about
	Creamos main.css dentro de css dentro de public
	ponemos un degradado de fondo uigradients

->59:14 Creamos un formulario en notes para y ponemos la ruta para poder guardar y postear
	añadimos que salga el mensaje de error y se pueda cerrar con bootstrap js
**Para comprobar que se guardan los datos en mongo ponemos en la consola. mongo		use notes-db-app	show collections	db.notes.find().pretty()
pero nosotros la hemos puesto en mongo atlas así que para comprobarlo entramos ahí


-->commit para cambiar la bbdd a mongo atlas, todo guardaba bien pero no se podían ver

1:25:54
	

mongo en una consola y npm run dev en otra
puerto ocupado lsof -i:3000 y luego kill -TERM pid

