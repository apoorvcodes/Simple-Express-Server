import {Router, Request , Response} from 'express';
import {body, validationResult} from 'express-validator';


const dataRouter = Router()

dataRouter.get('/', 
body('email').isEmail(),
async (req,res) =>
{
const error = validationResult(req.body);
if(error){
 res.status(400).send('Valind Params were not found please Provide email and password to login')
}
})

export default dataRouter;