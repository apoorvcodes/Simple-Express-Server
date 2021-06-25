"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const useRouter = express_1.Router();
const User_1 = require("../DataBase/Schema/User");
const express_validator_1 = require("express-validator");
useRouter.post('/', express_validator_1.body('email').isEmail(), express_validator_1.body('password').isLength({ min: 5 }), express_validator_1.body('username').isLength({ min: 5, max: 21 }), async (req, res) => {
    const error = express_validator_1.validationResult(req.body);
    if (error) {
        res.status(400).send('Body Params were not met');
    }
    let user = await User_1.User.findOne({ email: req.body.email });
    let userName = await User_1.User.findOne({ email: req.body.username });
    if (user) {
        res.status(400).send('That user already exisits!');
    }
    if (userName) {
        res.status(400).send('UserName already taken');
    }
    else {
        user = new User_1.User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            UpdatedAt: Date.now()
        });
        await user.save();
        res.send(user);
    }
});
exports.default = useRouter;
//# sourceMappingURL=user.js.map