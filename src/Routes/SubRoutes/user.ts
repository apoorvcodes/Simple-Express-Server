
import {Router , Request, Response} from 'express'


const useRouter = Router();
const UserJson = {
Data: {
name: 'Hi',
age: "18",
lastName: "ok",
Hobies: ['cricket', 'footbal']
},Timestamp: Date.now()
}
useRouter.get('/', (req: Request,res : Response) =>{
res.json(UserJson)
})

export default useRouter;