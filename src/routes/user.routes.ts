import { Router } from 'express';
import UserController from '../controllers/user.controller';
// import passwordValidate from '../middlewares/userPassword.validate';
import usersValidate from '../middlewares/users.validate';

const userRouter = Router();

const userController = new UserController();

userRouter.post(
  '/',
  usersValidate, 
  userController.create,
);

export default userRouter;