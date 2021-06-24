import {Router , Response} from 'express'
 const TestRouter = Router();



TestRouter.get('/',async (_,res : Response) => {
res.send("works")
})

export default TestRouter;