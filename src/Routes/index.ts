import * as express from "express";

    //import sub-routers
    import {adminRouter } from "./SubRoutes/admin";

    export const MainRouter = () => {

      let router = express.Router();


      router.use('/admin', adminRouter);

      //return for revealing module pattern
      return router;
    }