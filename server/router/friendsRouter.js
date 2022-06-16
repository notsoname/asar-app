const Router = require('express').Router;
const FriendsConrollers = require('../controllers/FriendsController');

const authMiddleWare = require('../middlewares/authMiddleWare');
const friendsRouter = new Router();

friendsRouter.get('/friends', FriendsConrollers.getAll)
friendsRouter.get('/friends/add', FriendsConrollers.getOne)
friendsRouter.delete('/friends/delete', FriendsConrollers.update)

module.exports = friendsRouter;