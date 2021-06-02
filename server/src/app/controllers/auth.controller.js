const User = require('../models/user.model');

class authController {
    // 
    async register(req, res, next) {

        try {
            const user = await User.create(req.body);
            res.status(200).json({
                status: 'success',
                data: {
                    user
                }
            });
        } catch (error) {
            res.json(`${error}`);
        }
    }

    async login(req, res, next) {
        res.status(200).json(`User login successfully`);
    }

}

module.exports = new authController();