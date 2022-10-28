import connection from '../models/connection';
import UserModel from '../models/user.model';
import { User } from '../interfaces/user.interface';
import { Jwt } from '../interfaces/jwt.interface';
import { createToken } from '../auth/JWT';
import { Login } from '../interfaces/login.interface';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<Jwt> {
    const { username, classe, level } = user;
    const id = await this.model.create(user);
    const token = createToken({ username, classe, level, id } as User);
    return { token };
  }

  public async getUser(login: Login) {
    const user = await this.model.getUser(login);
    if (!user) {
      return null;
    }
    const { id, username, classe, level } = user;
    const token = createToken({ username, classe, level, id } as User);
    return { token };
  }
}

export default UserService;