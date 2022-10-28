import { Router } from 'express';
import UserController from '../controllers/user.controller';
import loginFields from '../middlewares/loginFields.validate';

const loginRouter = Router();

const loginController = new UserController();

loginRouter.post('/', loginFields, loginController.getUser);

export default loginRouter;