import { NextFunction, Request, Response } from 'express';
import userSchema from '../utils/userSchema';

const usersValidate = (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  const { error } = userSchema.validate(user);

  if (error && error.message.includes('required')) {
    return res.status(400).json({ message: error.message });
  }
  if (error) {
    return res.status(422).json({ message: error.message });
  }

  next();
};                              

export default usersValidate;