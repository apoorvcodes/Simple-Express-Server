
import {Router} from 'express'
 const useRouter = Router();
import {User} from '../../DataBase/Schema/User'
import {body, validationResult} from 'express-validator'


useRouter.post('/',
body('email').isEmail(),
body('password').isLength({min: 5}),
body('username').isLength({min: 5, max : 21}),async (req,res) => {

       const error = validationResult(req.body);

	if (error) {
	    res.status(400).send('Body Params were not met')
	}
	
	let user = await User.findOne({ email: req.body.email });
	let userName = await User.findOne({ email: req.body.username });
	if (user) {
	     res.status(400).send('That user already exisits!');
	} 
	if(userName){
		 res.status(400).send('UserName already taken')
	}
	
	else {
	    // Insert the new user if they do not exist yet
	    user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		UpdatedAt: Date.now()
	    });
	    await user.save();
	    res.send(user);
	}
})

export default useRouter;


