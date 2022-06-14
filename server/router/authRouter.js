const Router = require('express').Router;
const AuthControllers = require('../controllers/authControllers.js');

const authRouter = new Router();

authRouter.post('/registration', AuthControllers.registration)
authRouter.post('/login', AuthControllers.login)
authRouter.post('/logout', AuthControllers.logout)
authRouter.get('/activate/:link', AuthControllers.activate)
authRouter.get('/refresh', AuthControllers.refresh)
authRouter.get('/users', AuthControllers.getUsers)

module.exports = authRouter