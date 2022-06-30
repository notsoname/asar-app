const bcrypt = require('bcrypt');
const ApiError = require('../exceptions/apiError');
const MessageModel = require('../models/MessageModel');
const async = require('async');
const UserModel = require('../models/UserModel');

class MessageService {
    async getMessages() {
        // if (!user.friends.includes(sender.nickname)) {
        //     throw ApiError.BadRequest("Пользователь уже в друзьях")
        // }
        const messages = await MessageModel.find();
        return messages;
    }

    async sendMessages(nickname, text) {
        // if (!user.friends.includes(sender.nickname)) {
        //     throw ApiError.BadRequest("Пользователь уже в друзьях")
        // }
        const messages = await new MessageModel({nickname,message});
        messages.save();
        return messages;
    }
}
module.exports = new MessageService();