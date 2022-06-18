const Router = require('express').Router;
const PostControllers = require('../controllers/PostControllers.js');
const authMiddleWare = require('../middlewares/authMiddleWare');
const postRouter = new Router();

postRouter.post('/posts/create', authMiddleWare, PostControllers.create)
postRouter.get('/posts', PostControllers.getAll)
postRouter.get('/posts/:id', PostControllers.getOne)
postRouter.put('/posts/like',authMiddleWare, PostControllers.like)
postRouter.put('/posts/unlike',authMiddleWare, PostControllers.unlike)
// postRouter.put('/posts', PostControllers.update)
postRouter.delete('/posts/:id', PostControllers.delete)

module.exports = postRouter