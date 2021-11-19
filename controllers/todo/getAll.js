const {Todo} = require('../../models/Todo');

const getAllTodo = async (req, res) => {
    try {
        const allTodos = await Todo.find({user: req.user._id}).populate('user').sort({_id:-1});
        if(!allTodos) return res.status(500).json({success: false, msg: 'No todos found'});
        // console.log(allTodos)

        return res.status(200).json({success: true, msg: 'All Todos', allTodos});
    } catch (err) {
        return res.status(500).json({success:false, msg: err.message});
    }
}


module.exports = getAllTodo;