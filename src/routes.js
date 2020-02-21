const express = require('express');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const PostController = require('./controllers/PostController');
const TopicController = require('./controllers/TopicController');

const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.post('/users', authMiddleware.auth, UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/posts', PostController.index);
routes.post('/posts', authMiddleware.auth, PostController.store);
routes.put('/posts/:id', authMiddleware.auth, PostController.update);
routes.delete('/posts/:id', authMiddleware.auth, PostController.delete);

routes.get('/posts/:post_id/topics', TopicController.index);
routes.post(
  '/posts/:post_id/topics',
  authMiddleware.auth,
  TopicController.store
);
routes.put(
  '/posts/:post_id/topics/:id',
  authMiddleware.auth,
  TopicController.update
);
routes.delete(
  '/posts/:post_id/topics/:id',
  authMiddleware.auth,
  TopicController.delete
);

module.exports = routes;
