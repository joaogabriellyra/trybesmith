import { RequestHandler } from 'express';
import { verifyToken } from '../auth/JWT';

const tokenAuthorization: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const pass = verifyToken(authorization);
    req.headers.userId = pass.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default tokenAuthorization;