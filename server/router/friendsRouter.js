const Router = require('express').Router;
const FriendsControllers = require('../controllers/FriendsController');

const authMiddleWare = require('../middlewares/authMiddleWare');
const friendsRouter = new Router();

friendsRouter.put('/users/friends', authMiddleWare, FriendsControllers.sendRequest)
friendsRouter.put('/users/friends/accept', authMiddleWare, FriendsControllers.acceptRequest)
friendsRouter.put('/users/friends/delete', authMiddleWare, FriendsControllers.deleteFriend)

module.exports = friendsRouter;