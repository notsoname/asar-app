const Router = require('express').Router;
const AuthControllers = require('../controllers/authControllers.js');
const MessageControllers = require('../controllers/MessageControllers.js');
const authRouter = new Router();

authRouter.get('/chat/:nickname', MessageControllers.getMessages)
authRouter.post('/chat/:nickname', MessageControllers.sendMessages)

module.exports = authRouter