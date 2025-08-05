import jwt from 'jsonwebtoken';

const secret = 'hello';

export const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const newToken = token.replace('Bearer ', '').trim();

  try {
    const result = jwt.verify(newToken, secret);
    req.user = result; 
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token not valid' });
  }
};


