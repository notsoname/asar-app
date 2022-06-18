const {Schema, model} = require('mongoose');


const FriendsSchema = new Schema({
  requester: {type: String, required: true},
  recipient: {type: String,required: true},
  status: {type: String,required: true }
  });

module.exports = model('friends', FriendsSchema);