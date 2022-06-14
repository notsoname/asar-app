const UserService = require('../services/userService.js');

class AuthControllers {
    async registration(req, res) {
        try {
            const {email, password} = req.body;
            const userData = await UserService.registration(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async login(req, res) {
        try {

        } catch (error) {
            res.status(500).json(error)
        }
    }
    async logout(req, res) {
        try {

        } catch (error) {
            res.status(500).json(error)
        }
    }
    async activate(req, res) {
        try {

        } catch (error) {
            res.status(500).json(error)
        }
    }
    async refresh(req, res) {
        try {
  
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getUsers(req, res) {
        try {

        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = new AuthControllers();