const { Todo } = require('../../models/Todo');

const completedTodo = async (req, res) => {
    let todoId = req.params.id;
    let completed = req.body;
    try {
        let completedTodo = await Todo.findById({_id: todoId});
        completedTodo.completed = !completed;
        completedTodo.completed.save();
        if (!updatedTodo) return res.status(500).json({success: false, msg: "No todo found"});
        return res.status(200).json({success: true, msg: "Todo completed"});
    } catch (error) {
        return res.status(500).json({success: false, msg: 'Unable to complete todo'});
    }
};

module.exports = completedTodo;