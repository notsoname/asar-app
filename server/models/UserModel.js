const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    nickname: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: true},
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

module.exports = model('User', UserSchema);