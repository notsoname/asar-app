const bcrypt = require('bcrypt');
const FreindModel = require('../models/FreindModel');
const ApiError = require('../exceptions/apiError');

class FriendService {
    async getFriends() {
        const friends = await FreindModel.find();
        return users;
    }

    async addFriend(id) {
        if (id) {
            throw ApiError.BadRequest(`Пользователь ${email} не существует`)
        }
        const id =
    }
}

module.exports = new FriendService();