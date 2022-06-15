const {Schema, model} = require('mongoose');

const PostSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    likes: {type: Number, default: 0},
    comments: {type: Object},
    image: {type: String, required: true}
})

module.exports = model('Post', PostSchema);