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

    async getUser(req, res) {
        console.log(req.user.id)
        try {
            // const user =  await UserService.getUser(req.params.id)
            const user =  await UserService.getUser(req.query.email, req.user.id)
            return res.json(user)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

module.exports = new UserControllers()