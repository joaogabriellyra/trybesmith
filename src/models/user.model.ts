import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Login } from '../interfaces/login.interface';
import { User } from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connectionDB: Pool) {
    this.connection = connectionDB;
  }

  public async create(user: User) {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return insertId;
  }

  public async getUser(login: Login) {
    const { username, password } = login;
    const [[user]] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password], 
    );
    return user;
  }
}