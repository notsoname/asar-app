const {Schema, model} = require('mongoose');
const friends = require("mongoose-friends");

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    nickname: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: true},
	avatar: {type: String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_5Qqe10mSNqAjR1pBmEX4OvqNksrEewsGiSxWGUtIg7Je0m8SsmE2KvRfFO-Q3OxYkY&usqp=CAU'},
    activationLink: {type: String},
    sentRequest:[{
		username: {type: String, default: ''}
	}],
	request: [{
		userId: {type: Schema.Types.ObjectId, ref: 'User'},
		username: {type: String, default: ''}
	}],
    friends: [{
		friendId: {type: Schema.Types.ObjectId, ref: 'User'},
		friendName: {type: String, default: ''}
	}],
	totalRequest: {type: Number, default:0}
})
UserSchema.plugin(friends({pathName: "friends"}))

module.exports = model('User', UserSchema);