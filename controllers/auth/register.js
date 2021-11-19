const {User} = require('../../models/User');
const bcryptjs = require('bcryptjs');
const welcomeEmail = require('../../utils/WelcomeEmail');
const randomstring = require('randomstring');

const createNewUser = async (req, res, next) => {
    try {
        let { email, fullname, password} = req.body;
        if(!email || !fullname || !password) return res.status(400).json({success: false, msg: 'All fields are required'});
        if(fullname.length > 8) return res.status(400).json({success: false, msg: 'Username should be less than eight characters'});

        let newFullname = fullname.toLowerCase().replace(/ /g, '');
        
        const user_name = await User.findOne({fullname: newFullname});
        if(user_name) return res.status(400).json({success: false, msg: 'Username already exist'});

        const user_email = await User.findOne({ email });
        if(user_email) return res.status(400).json({success: false, msg: 'Email already exist'});

        let hashedpassword = bcryptjs.hashSync(password, 12);

        const newUser = new User ({
            fullname: newFullname,
            email,
            password: hashedpassword,
        });

        await newUser.save();
        if(!newUser) return res.status(500).json({msg: 'An error has occurred'});

        res.status(201).json({
            success: true,
            msg: 'User saved successfully',
            user: newUser
        })


    } catch (err) {
        return res.status(500).json({message: err.message})
    }
}



module.exports = createNewUser;