const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let todoSchema = new Schema({
    todo: String,

    completed: {
        type: Boolean,
        default: false,
    },

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },

    todos: [{
        type: mongoose.Types.ObjectId,
        ref: 'user',
    }],

}, {timestamps: true});

module.exports = {
    Todo: model('todo', todoSchema)
}