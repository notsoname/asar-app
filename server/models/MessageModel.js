const {Schema, model} = require('mongoose');

const MessageSchema = new Schema({
    message: {
        text: { type: String, required: true },
    },
    users: Array,
    sender: {
        type: String,
        ref: "User",
        required: true,
    },
    },
    {
    timestamps: true,
    }
)

module.exports = model('Messages', MessageSchema);