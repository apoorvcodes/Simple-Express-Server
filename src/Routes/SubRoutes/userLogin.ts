import {Router, Request , Response} from 'express';
import {body, validationResult} from 'express-validator';


const loginRouter = Router()

loginRouter.post('/', 
body('email').isEmail(),
body('password').isLength({min:5}),
async (req:Request,res:Response) => {
const error = validationResult(req.body);

if(error){
 res.status(400).send('Valind Params were not found please Provide email and password to login')
}
})

export default loginRouter;






