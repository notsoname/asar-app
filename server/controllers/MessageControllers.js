const FriendsService = require('../services/FriendsService.js');
const MessageService = require('../services/MessageService.js');


class Messagecontrollers {
    async getMessages(req, res, next) {
        try {
            const messages = await MessageService.getMessages()
            res.json(messages)
          } catch (e) {
            next(e)
          }
    }

    async sendMessages(req, res, next) {
        try {
            const messages = await MessageService.sendMessages(req.user.nickname, req.body.message)
            res.json(messages)
          } catch (e) {
            next(e)
          }
    }
}

module.exports = new Messagecontrollers()