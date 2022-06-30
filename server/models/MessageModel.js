const {Schema, model} = require('mongoose');

const MessageSchema = new Schema({
    nickname: {type: String, required: true, ref: "User"},
    message: {type: String, required: true}, 
})

module.exports = model('Message', MessageSchema);