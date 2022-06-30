const bcrypt = require('bcrypt');
const ApiError = require('../exceptions/apiError');
const MessageModel = require('../models/MessageModel');
const async = require('async');
const UserModel = require('../models/UserModel');

class MessageService {
    async getMessages(from, to) {
        const messages = await MessageModel.find({
            users: {
                $all: [from, to]
            },
        }).sort({ updatedAt: 1 });
        const projectedMessages = messages.map((msg) => {
            return {
                fromSelf: msg.sender.toString() === from,
                message: msg.message.text,
            };
        })
        return projectedMessages;
    }

    async sendMessages(from, to, message) {
        const messages = await MessageModel.create({
            message: {text: message},
            users: [from, to],
            sender: from
        });
        return messages;
    }
}
module.exports = new MessageService();