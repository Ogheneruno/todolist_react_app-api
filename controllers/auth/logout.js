const User = require('../../models/User')

const logout = async (req, res) => {
    try {
        if (User) {
            logout();
            return res.status(200).json({success: true, msg: 'Logout Successful'});
        }
    } catch (err) {
        return res.status(500).json({success: false, msg: err.message});
        
    }
}


module.exports = logout;