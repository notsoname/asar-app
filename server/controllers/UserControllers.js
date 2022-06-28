const PostService = require('../services/PostService.js');
const UserService = require('../services/UserService.js');

class UserControllers {
    async getUsers(req, res, next) {
        // console.log(req.user)
        try {
            const users = await UserService.getUsers(req.user.id);
            return res.json(users)
        } catch (e) {
            next(e)
        }
    }

    async getUser(req, res, next) {
        try {
            // const user =  await UserService.getUser(req.params.id)
            const user =  await UserService.getUser(req.query.nickname, req.user.id)
            return res.json(user)
        } catch (error) {
            next(e)
        }
    }
}

module.exports = new UserControllers()