const {Todo} = require('../../models/Todo');

const updateTodo = async (req, res) => {
    let todo = req.params.id;
    let text = req.body;
    try {
        let updatedTodo = await Todo.findOneAndUpdate({_id: todo}, {$set:text});
        // updatedTodo.todo = text;
        // updatedTodo.save();
        if (!updatedTodo) return res.status(500).json({success: false, msg: "No todo found"});
        return res.status(200).json({success: true, msg: "Todo updated"});
    } catch (error) {
        return res.status(500).json({success: false, msg: 'Unable to update todo'});
    }
};

module.exports = updateTodo;