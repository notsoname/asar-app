const bcrypt = require('bcrypt');
const ApiError = require('../exceptions/apiError');
const FriendModel = require('../models/FriendModel');
const async = require('async');
const UserModel = require('../models/UserModel');

class FriendService {
    async sendRequest(currentUser,nickname) {
        const candidate = await UserModel.findOne({nickname});
        candidate.request.map(current => {
            if (current.nickname == currentUser) {
                throw ApiError.BadRequest("")
            }
        })
        console.log(currentUser)
        candidate.request = [...candidate.request, {nickname: currentUser}];
        candidate.requestStatus = [...candidate.requestStatus, {nickname: currentUser, status: false}];
        candidate.totalRequest += 1;
        await candidate.save();
        return candidate;
    }

    async acceptRequest(currentUser,nickname) {
        const candidate = await UserModel.findOne({nickname});
        const current = await UserModel.findByIdAndUpdate({requestStatus});
        console.log(currentUser)
        // candidate.request = [...candidate.request, {nickname}, ];
        current.requestStatus = [...candidate.requestStatus, {nickname: nickname, status: true}];
        current.totalRequest -= 1;
        await current.save();
        return current;
    }
    // async sendRequest(currentUser,nickname) {
    //     const candidate = await UserModel.findOne({nickname});
    //     if (candidate.friends.includes(currentUser)) {
    //         throw ApiError.BadRequest("Пользователь уже в друзьях")
    //     }
    //     candidate.friends = [...candidate.friends, currentUser];
    //     console.log(candidate.friends)
    //     await candidate.save();
    //     return candidate;
    // }

}
module.exports = new FriendService();