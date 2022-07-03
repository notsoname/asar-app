const {Schema, model} = require('mongoose');

const PostSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    likes: [{type: String, ref: 'User'}],
    comments: {type: Schema.Types.ObjectId},
    image: {type: String, required: true},
    postedBy: {type: String, ref: 'User'},
    comments:[{
        text:String,
        postedBy:{type: String,ref:"User"}
    }],
    // postedBy: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})

module.exports = model('Post', PostSchema);