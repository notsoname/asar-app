const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    nickname: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: true},
	avatar: {type: String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_5Qqe10mSNqAjR1pBmEX4OvqNksrEewsGiSxWGUtIg7Je0m8SsmE2KvRfFO-Q3OxYkY&usqp=CAU'},
    activationLink: {type: String},
    friends: [{type: String, default: ''}],
    requestStatus: [{
        nickname: {type: String, default: ''},
        status: {type: Boolean, default: false}
    }],
    requests: [{type: String, default: '', ref:"User"}],
    myRequests: [{type: String, default: '', ref:"User"}],
    roles: [{type: String, ref: 'Role'}]
})

module.exports = model('User', UserSchema);