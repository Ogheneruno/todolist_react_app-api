const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('Hello welcome to homepage')
    res.json({message: 'Hello welcome to homepage'})
})


module.exports = router;