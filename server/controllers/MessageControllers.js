const FriendsService = require('../services/FriendsService.js');
const MessageService = require('../services/MessageService.js');


class Messagecontrollers {
    async getMessages(req, res, next) {
        try {
          const {to} = req.body
            const messages = await MessageService.getMessages(req.user.nickname, to)
            res.json(messages)
          } catch (e) {
            next(e)
          }
    }

    async sendMessages(req, res, next) {
      const {to, message} = req.body;
        try {
            const messages = await MessageService.sendMessages(req.user.nickname, to, message)
            res.json(messages)
          } catch (e) {
            next(e)
          }
    }
}

module.exports = new Messagecontrollers()