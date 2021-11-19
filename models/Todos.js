const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let todosSchema = new Schema({
    task: String,

    todoId: mongoose.Types.ObjectId,

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
}, {timestamps: true});

module.exports = {
    Todos: model('todos', todosSchema)
}