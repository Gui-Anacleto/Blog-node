const express = require('express');
const router = express.Router();

const PostController = require('./controllers/PostController')

router.get('/',(req, res) => res.render('home.ejs'));

router.get('/post', (req, res) => res.render('single-post.ejs'));

router.get('/post/add', (req, res) => res.render('add-post.ejs'));

router.post('/post/add', PostController.store);

module.exports = router;

