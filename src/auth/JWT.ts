import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../interfaces/user.interface';

dotenv.config();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export const createToken = (user: Omit<User, 'password'>) => jwt
  .sign(user, process.env.JWT_SECRET as Secret, jwtConfig as jwt.SignOptions);

export const verifyToken = (token: string): JwtPayload => {
  const result = jwt.verify(token, process.env.JWT_SECRET as Secret);
  return result as JwtPayload;
};