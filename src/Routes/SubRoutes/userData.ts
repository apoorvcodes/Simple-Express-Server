import { Router, Request, Response } from 'express';
// import {body, validationResult} from 'express-validator';
import { User } from '../../DataBase/Schema/User';

const dataRouter = Router();

dataRouter.get(
	'/:email',

	async (req: Request, res: Response) => {
		if (!req.params.email) {
			res.status(400).json('No User Found');
		}
		const user = await User.findOne({ email: req.params.email });
		if (user) {
			res.status(300).json(user);
		} else {
			res.status(400).json('User Not found register user');
		}
	}
);

export default dataRouter;
