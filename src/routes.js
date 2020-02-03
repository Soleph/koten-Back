const express = require('express');

const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');
const TopicController = require('./controllers/TopicController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/posts', PostController.index);
routes.post('/posts', PostController.store);

routes.get('/posts/:post_id/topics', TopicController.index);
routes.post('/posts/:post_id/topics', TopicController.store);

module.exports = routes;
