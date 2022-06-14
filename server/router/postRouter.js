const Router = require('express').Router;
const PostControllers = require('../controllers/PostControllers.js');

const postRouter = new Router();

postRouter.post('/posts', PostControllers.create)
postRouter.get('/posts', PostControllers.getAll)
postRouter.get('/posts/:id', PostControllers.getOne)
postRouter.put('/posts', PostControllers.update)
postRouter.delete('/posts/:id', PostControllers.delete)

module.exports = postRouter