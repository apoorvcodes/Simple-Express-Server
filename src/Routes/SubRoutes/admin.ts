import * as express from "express";

export const adminRouter = () => {
    
    let router = express.Router();
	  
    router.get('/admin', (_, res) => {
	res.json({success: true});
    });
    
    return router;
}