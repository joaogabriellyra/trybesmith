import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    
    const token = await this.userService.create(user);
    res.status(201).json(token);
  };

  public getUser = async (req: Request, resp: Response) => {
    const user = req.body;
    const token = await this.userService.getUser(user);
    if (!token) {
      return resp.status(401).json({ message: 'Username or password invalid' });
    }
    resp.status(200).json(token);
  };
}

export default UserController;