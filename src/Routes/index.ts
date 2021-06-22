import useRouter from "./SubRoutes/user";
import { Express , Router , Request , Response } from 'express'

const routes = Router();

routes.use('/users', useRouter);

export default routes;