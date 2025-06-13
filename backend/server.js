import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/productRoutes.js'; // ✅ use correct name
import cors from 'cors';


dotenv.config();

const app = express();
app.use(express.json());
// CORS setup
const allowedOrigins = [
  'http://localhost:5173',
  'https://joevibe.vercel.app'  // ✅ Add this
];
app.use(cors({
  origin: ['http://localhost:5173', 'https://joevibe.vercel.app'],
  credentials: true
}));


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes); // ✅ matches /api/products/...

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));
