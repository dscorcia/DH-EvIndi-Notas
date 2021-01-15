const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const mainRouter = require('./src/routers/mainRouter')

// Esta linea aclara que vamos a disponibilizar una carpeta para que sea pública para que el navegador pueda acceder...
app.use(express.static( path.join(__dirname, './public') ) )
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Method-Override para metodos PUT Y DELETE
app.use(methodOverride('_method'));

/*EJS*/
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.json())

/*Inicializar puerto de escucha del servidor*/
app.listen(process.env.PORT || 3000, function() {
    console.log(`Servidor corriendo en el puerto 3000`);
    console.log(`http://localhost:3000`);
  })

  //Home
  app.use('/',mainRouter)