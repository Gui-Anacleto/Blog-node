const express = require('express');
const routes = express.Router();

routes.get('/',(req, res) => res.render('home.ejs'));

routes.get('/post', (req, res) => res.render('single-post.ejs'));

module.exports = routes;