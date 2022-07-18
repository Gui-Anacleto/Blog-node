const Sequelize = require('sequelize');


const connection = new Sequelize({
    dialect: 'sqlite',
    storage: 'blognode.sqlite'
});

module.exports = connection;
/*
Escrevo um novo post -> Salvo no DB -> Busco as informações pro APP

Inserção de novo Post
SQL = 'INSERT INTO posts VALUES id,nome,texto,categoria';

SQL = 'SELECT nome FROM posts WHERE id =1'

Post.create({
    id: 1,
    nome: 'Teste de Post'
});

Post.findID({
    id: 1
})
*/