const FriendsService = require('../services/FriendsService.js');
const PostService = require('../services/PostService.js');
const UserService = require('../services/UserService.js');

class FriendsControllers {
    async sendRequest(req, res, next) {
        try {
            const {nickname} = req.body;
            const friend = await FriendsService.sendRequest(req.user.nickname,nickname)
            res.json(friend)
          } catch (e) {
            next(e)
          }
    }
}

module.exports = new FriendsControllers()