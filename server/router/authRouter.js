const Router = require('express').Router;
const AuthControllers = require('../controllers/authControllers.js');
const {body} = require('express-validator');
const authMiddleWare = require('../middlewares/authMiddleWare');
const authRouter = new Router();

authRouter.post('/registration', 
        body('email').isEmail(), 
        body('password').isLength(3, 20), 
        AuthControllers.registration)
authRouter.post('/login', AuthControllers.login)
authRouter.post('/logout', AuthControllers.logout)
authRouter.get('/activate/:link', AuthControllers.activate)
authRouter.get('/refresh', AuthControllers.refresh)
authRouter.get('/users', authMiddleWare, AuthControllers.getUsers)

module.exports = authRouter