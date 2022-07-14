const Router = require('express').Router;
const UserControllers = require('../controllers/UserControllers.js');
const adminMiddleWare = require('../middlewares/adminMiddleWare.js');
const authMiddleWare = require('../middlewares/authMiddleWare');

const usersRouter = new Router();

// usersRouter.get('/users', authMiddleWare, adminMiddleWare(["ADMIN"]), UserControllers.getUsers)
usersRouter.get('/users', authMiddleWare, UserControllers.getUsers)
usersRouter.get('/users/search', authMiddleWare, UserControllers.getUser)

module.exports = usersRouter;