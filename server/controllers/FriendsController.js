const FriendsService = require('../services/FriendsService.js');
const PostService = require('../services/PostService.js');
const UserService = require('../services/UserService.js');

class FriendsControllers {
    async sendRequest(req, res, next) {
        try {
            const friend = await FriendsService.sendRequest(req.body.nickname, req.user.nickname)
            res.json(friend)
          } catch (e) {
            next(e)
          }
    }

    async acceptRequest(req, res, next) {
        try {
            const friend = await FriendsService.acceptRequest(req.user.nickname, req.body.nickname)
            res.json(friend)
          } catch (e) {
            next(e)
          }
    }

    async deleteFriend(req, res, next) {
        try {
            const friend = await FriendsService.deleteFriend(req.user.nickname, req.body.nickname)
            res.json(friend)
          } catch (e) {
            next(e)
          }
    }
}

module.exports = new FriendsControllers()