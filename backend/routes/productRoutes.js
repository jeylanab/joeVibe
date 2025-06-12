// routes/productRoutes.js
import express from 'express';
import {
  addProductController,
  getAllProductsController,
  getSingleProductController,
  updateProductController,
  deleteProductController,
} from '../controllers/productController.js';

import authMiddleware from '../middleware/authMiddleware.js';
import adminMiddleware from '../middleware/adminMiddleware.js';

const router = express.Router();

// Public
router.get('/', getAllProductsController);

// Admin routes
router.post('/add-product', authMiddleware, adminMiddleware, addProductController);
router.get('/:id', authMiddleware, adminMiddleware, getSingleProductController);
router.put('/:id', authMiddleware, adminMiddleware, updateProductController);
router.delete('/:id', authMiddleware, adminMiddleware, deleteProductController);


export default router;
