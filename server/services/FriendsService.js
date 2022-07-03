const bcrypt = require('bcrypt');
const ApiError = require('../exceptions/apiError');
const FriendModel = require('../models/FriendModel');
const async = require('async');
const UserModel = require('../models/UserModel');

class FriendService {
    async sendRequest(user, sender) {
        // if (!user.friends.includes(sender.nickname)) {
        //     throw ApiError.BadRequest("Пользователь уже в друзьях")
        // }
        const candidate = await UserModel.findOneAndUpdate({nickname: user}, {$addToSet: {requests: sender}});
        return candidate;
    }

    async acceptRequest(accepter,sender) {
        // if (!accepter) {
        //     throw new Error('User not found')
        // }
        const friend1 = await UserModel.findOneAndUpdate({nickname: accepter}, {$addToSet: {friends: sender}, $pull: {requests: sender}});
        const friend2 = await UserModel.findOneAndUpdate({nickname: sender}, {$addToSet: {friends: accepter}});
        return [friend1, friend2];
    }

    async deleteFriend(sender, accepter) {
        // if (!accepter) {
        //     throw new Error('User not found')
        // }
        const friend1 = await UserModel.findOneAndUpdate({nickname: accepter}, {$pull: {friends: sender}});
        const friend2 = await UserModel.findOneAndUpdate({nickname: sender}, {$pull: {friends: accepter}});
        return [friend1, friend2];
    }
}
module.exports = new FriendService();