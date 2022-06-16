const Router = require('express').Router;
const PostControllers = require('../controllers/PostControllers.js');
const authMiddleWare = require('../middlewares/authMiddleWare');
const postRouter = new Router();

<<<<<<< HEAD
postRouter.post('/posts/create', PostControllers.create)
=======
postRouter.post('/posts/create', authMiddleWare, PostControllers.create)
>>>>>>> bd749e7f0360a2ff3511448de23556fdd8b14048
postRouter.get('/posts', PostControllers.getAll)
postRouter.get('/posts/:id', PostControllers.getOne)
postRouter.put('/posts', PostControllers.update)
postRouter.delete('/posts/:id', PostControllers.delete)

module.exports = postRouter