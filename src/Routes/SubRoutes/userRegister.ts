
import {Router} from 'express';
 const useRouter = Router();
import {User} from '../../DataBase/Schema/User'
import {body, validationResult} from 'express-validator'
import { errorFormatter } from '../errorHandler';
import {Request, Response} from 'express'

	 
useRouter.post('/',
body('email').isEmail(),
body("username").isLength({min:5}),
body("Password").isLength({min:5}),

async (req:Request,res:Response) => {


const result = validationResult(req).formatWith(errorFormatter);
  if (!result.isEmpty()) {
  res.json({ errors: result.array() });
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
	    
	    user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		UpdatedAt: Date.now()
	    })
	   
	await user.save();
	res.cookie('userCookie', userName, {maxAge: 10800}).send('cookie set');
	res.send(user);
}})

export default useRouter;


