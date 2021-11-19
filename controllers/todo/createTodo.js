const {Todo} = require('../../models/Todo');

const createNewTodo = async (req, res, next) => {
    let {todo} = req.body;

    if (!todo) return res.status(400).json({msg: 'Please type a todo'});

    const newTodo = new Todo({
        user: req.user._id,
        todo
    });

    if(!newTodo) return res.status(500).json({success: false, msg: 'An error has occured'});

    await newTodo.save();

    return res.status(201).json({success: true, msg: 'Todo created', newTodo})
}

module.exports = createNewTodo;