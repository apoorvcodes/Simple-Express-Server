import {Router , Response} from 'express'
 const TestRouter = Router();



TestRouter.post('/',async (_,res : Response) => {
res.send("works")
})

export default TestRouter;