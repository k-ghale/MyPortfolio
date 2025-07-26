
import jwt from 'jsonwebtoken';

const secretKey = 'hellaur';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  // Extract token from "Bearer TOKEN"
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401); // No token

  // Verify token
  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token
    req.user = user; // Attach user info from token payload
    next();
  });
};

export const isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }
  next();
};

