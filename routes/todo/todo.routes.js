const express = require('express');
const router = express.Router();
const verify = require('../../middleware/authjwt');
const upload = require('../../config/multerSetup');


const createTodo = require('../../controllers/todo/createTodo');
const getAll = require('../../controllers/todo/getAll');
const updateTodo = require('../../controllers/todo/updateTodo');
const deleteTodo = require('../../controllers/todo/deleteTodo');



router.route('/')
    .post(verify, upload.single('postMedia'), createTodo)
    .get(verify, getAll);

router.route('/delete/:id')
    .delete(verify, deleteTodo);

router.route('/put/:id')
    .post(updateTodo);



module.exports = router;