//express sequelize sqlite3 nodemon
const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))

const routes = require('./routes');

app.set('view enine', 'ejs');

app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

const connection = require('./config/connection');

app.use(routes);

connection.sync().then(result => {
    //console.log(result);
    app.listen(3333);
}).catch(error =>{
    console.log(error);
});



/* CONCEITO MVC 
MODEL- Modelo/Recurso
    Ex: Posts, Comentarios, Categorias, Tags, Usuarios, Administradores.
VIEW- Vista/Tela/Rota
    Ex: Paginas Home, Pagina de Post unico, Pagina de login.
CONTROLLER- Controle/Regra de negócio
    Ex: PostsController(login-logica de autenticação)

*/