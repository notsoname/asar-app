const bcrypt = require('bcrypt');
const ApiError = require('../exceptions/apiError');
const FriendModel = require('../models/FriendModel');
const async = require('async');
const friends = require("mongoose-friends");
const UserModel = require('../models/UserModel');

class FriendService {

    async sendRequest(userId = "62ac28d667bfae04959c3bae", currentId) {
       const request = friends.requestFriend(userId, currentId)
       console.log(request)
       return request
    }

}
module.exports = new FriendService();