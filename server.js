import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import journalRoutes from './routes/journalRoutes.js';

dotenv.config();
const app = express();

// Connect to DB
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/journals', journalRoutes);

app.get('/', (req, res) => res.send('Travel Journal API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
