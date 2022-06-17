const Router = require('express').Router;
const FriendsControllers = require('../controllers/FriendsController');

const authMiddleWare = require('../middlewares/authMiddleWare');
const friendsRouter = new Router();

friendsRouter.post('/friends', authMiddleWare, FriendsControllers.sendRequest)
// friendsRouter.get('/friends/add', FriendsConrollers.getOne)
// friendsRouter.delete('/friends/delete', FriendsConrollers.update)

module.exports = friendsRouter;