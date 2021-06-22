import {Router , Request, Response} from 'express'

const useRouter = Router();

useRouter.get('/', (req: Request,res : Response) =>{
res.json('Works')
})

export default useRouter;