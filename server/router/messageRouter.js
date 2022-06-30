const Router = require('express').Router;
const AuthControllers = require('../controllers/authControllers.js');
const MessageControllers = require('../controllers/MessageControllers.js');
const authMiddleWare = require('../middlewares/authMiddleWare.js');
const authRouter = new Router();

authRouter.post('/chat/getMessages', authMiddleWare, MessageControllers.getMessages)
authRouter.post('/chat/sendmessage', authMiddleWare, MessageControllers.sendMessages)

module.exports = authRouter