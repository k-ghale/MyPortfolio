
import express from 'express';
import mongoose from 'mongoose';
import config from "../config/config.js"
import authRoutes from './routes/authRoutes.js';
import educationRoutes from './routes/educationRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import { authenticateToken, isAdmin } from './helpers/authMiddleware.js';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/education', authenticateToken, educationRoutes);
app.use('/api/projects', authenticateToken, projectRoutes);
app.use('/api/contact', contactRoutes);

mongoose.connect(config.mongoUri)
  .then(() => app.listen(config.port || 3000, () => console.log('Server running on port 3000')))
  .catch(err => console.log(err));

