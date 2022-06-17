const {Schema, model} = require('mongoose');


const FriendsSchema = new Schema({
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    requestTo: {type: Schema.Types.ObjectId, ref: 'User'},
    accepted: {tyoe: Boolean, default:false}
  });

module.exports = model('Friends', FriendsSchema);