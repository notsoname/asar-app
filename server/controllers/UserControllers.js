const PostService = require('../services/PostService.js');
const UserService = require('../services/UserService.js');
const Role = require("../models/RoleModel")

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

    // async getUsers(req, res) {
    //     try {
    //         const userRole = new Role()
    //         const adminRole = new Role({value: "ADMIN"})
    //         await userRole.save()
    //         await adminRole.save()
    //     } catch (error) {
            
    //     }
    // }

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