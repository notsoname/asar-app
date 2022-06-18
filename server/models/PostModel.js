const {Schema, model} = require('mongoose');

const PostSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    comments: {type: Schema.Types.ObjectId},
    image: {type: String, required: true},
    postedBy: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = model('Post', PostSchema);