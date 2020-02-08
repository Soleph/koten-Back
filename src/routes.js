const express = require('express');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const PostController = require('./controllers/PostController');
const TopicController = require('./controllers/TopicController');

const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware.auth);

routes.get('/posts', PostController.index);
routes.post('/posts', PostController.store);
routes.put('/posts/:id', PostController.update);
routes.delete('/posts/:id', PostController.delete);

routes.get('/posts/:post_id/topics', TopicController.index);
routes.post('/posts/:post_id/topics', TopicController.store);
routes.put('/posts/:post_id/topics/:id', TopicController.update);
routes.delete('/posts/:post_id/topics/:id', TopicController.delete);

module.exports = routes;
