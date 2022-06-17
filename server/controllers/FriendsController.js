const FriendsService = require('../services/FriendsService.js');
const PostService = require('../services/PostService.js');
const UserService = require('../services/UserService.js');

class FriendsControllers {
    async sendRequest(req, res, next) {
        try {
            const searchFriend = await FriendsService.sendRequest(req.query.id, req.user.id);
            console.log(searchFriend)
            return res.json(searchFriend)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new FriendsControllers()