const FriendsService = require('../services/FriendsService.js');
const PostService = require('../services/PostService.js');
const UserService = require('../services/UserService.js');

class FriendsConrollers {
    async getFriends(req, res, next) {
        try {
            const friends = await FriendsService.addFriend(req.query.email);
            return res.json(friends)
        } catch (e) {
            next(e)
        }
    }

    async getUser(req, res) {
        try {
            // const user =  await UserService.getUser(req.params.id)
            const user =  await UserService.getUser(req.query.email)
            return res.json(user)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

module.exports = new FriendsConrollers()