import {Router, Request , Response} from 'express';
import {body, validationResult} from 'express-validator';
import { User } from 'src/DataBase/Schema/User';
let cookie = {
	name : "simpleCookie",
}

const loginRouter = Router()

loginRouter.post('/', 
body('email').isEmail(),
body('password').isLength({min:5}),
async (req:Request,res:Response) => {
const error = validationResult(req.body);
if(req.cookies){
 res.send("Already Signed in");
}

if(error){
 res.status(400).send('Valind Params were not found please Provide email and password to login')
}
else{
	let user = await User.findOne({ email: req.body.email });
	
	if (user) {
	     res.status(300).send('Signed In!');
	     res.cookie('userCookie', cookie, {maxAge: 10800}).send('Done');
	} 
}
})

export default loginRouter;






