import {Router, Request , Response} from 'express';
import {body, validationResult} from 'express-validator';


const deleteRouter = Router()

deleteRouter.delete('/', 
body('email').isEmail(),

async (req: Request,res: Response) =>
{
const error = validationResult(req.body);
if(error){
 res.status(400).send('Valind Params were not found please Provide email and password to login')
}
})

export default deleteRouter;