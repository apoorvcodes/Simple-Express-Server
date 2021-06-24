import useRouter from "./SubRoutes/user";
import {  Router  } from 'express'
import TestRouter from "./SubRoutes/test";
const routes = Router();

routes.use('/users', useRouter);
routes.use('/tests', TestRouter);

export default routes;