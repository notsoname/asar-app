const Router = require('express').Router;
const PostControllers = require('../controllers/PostControllers.js');
const authMiddleWare = require('../middlewares/authMiddleWare');
const postRouter = new Router();

postRouter.post('/posts/create', authMiddleWare, PostControllers.create)
postRouter.get('/posts', PostControllers.getAll)
postRouter.get('/posts/userPosts', authMiddleWare, PostControllers.getUserPosts)
postRouter.get('/posts/:id', PostControllers.getOne)
postRouter.put('/posts/like', authMiddleWare, PostControllers.like)
postRouter.put('/posts/unlike', authMiddleWare, PostControllers.unlike)
postRouter.put('/posts/comment',authMiddleWare, PostControllers.createComment)
postRouter.put('/posts/update', authMiddleWare, PostControllers.update)
postRouter.delete('/posts/:id', authMiddleWare, PostControllers.delete)

module.exports = postRouter