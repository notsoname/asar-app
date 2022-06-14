const {Schema, model} = require('mongoose');

const PostSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}
})

module.exports = model('Post', PostSchema);