// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/productRoutes.js'; // ✅ Use only one consistent route file

dotenv.config();

const app = express();
app.use(express.json());

// ✅ API routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes); // Make sure this routes file contains all product handlers

// ✅ Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
