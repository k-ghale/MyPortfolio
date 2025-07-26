
import express from 'express';
import mongoose from 'mongoose';
import config from "../config/config.js"
import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

mongoose.connect(config.mongoUri)
  .then(() => app.listen(3000, () => console.log('Server running')))
  .catch(err => console.log(err));

