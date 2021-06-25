import useRouter from "./SubRoutes/userRegister";
import {  Router  } from 'express'
import loginRouter from './SubRoutes/userLogin'
import deleteRouter from './SubRoutes/userDelete'
import dataRouter from './SubRoutes/userData'

const routes = Router();

routes.use('/register', useRouter);
routes.use('/login', loginRouter);
routes.use('/delte', deleteRouter);
routes.use('/data', dataRouter);


export default routes;