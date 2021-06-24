
import {Router , Request, Response} from 'express'
 const useRouter = Router();
import {User, validateUser} from 'src/DataBase/Schema/User'
// const UserJson:UserJson = {
// Data: {
// name: 'Hi',
// age: 18,
// lastName: "ok",
// Hobies: ['cricket', 'footbal']
// },Timestamp: Date.now()
// }
User

useRouter.get('/', (req: Request,res : Response) =>{

})

export default useRouter;