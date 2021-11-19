const {User} = require('../../models/User');
const bcryptjs = require('bcryptjs');
const {compare} = bcryptjs; 
const jwt = require('jsonwebtoken');


const loggedinUser = async (req, res) => {
    try {
        let { userInput, password } = req.body;

        if (!userInput || !password) return res.status(400).json({msg: 'All fields are required'});

        let findUser = await User.findOne({ email: userInput.toLowerCase().replace(/ /g, '') });

        if (!findUser) return res.status(404).json({success: false, msg: 'Invalid login credentials, please sign up.'});

        let passwordMatch = await compare(password, findUser.password);

        if (!passwordMatch) return res.status(403).json({success: false, msg: 'Invalid login credentials, please sign up.'});

        let token = jwt.sign({findUser}, process.env.JWT_SECRET, {expiresIn: '365d'});

        res.status(200).json({
            success: true,
            msg: 'Login successful',
            data: {token,
            user: {
                ...findUser._doc,
                password: ''
            }
        }
    })


    }catch(err) {
        return res.status(500).json({msg: err.message});
    }
}

module.exports = loggedinUser;