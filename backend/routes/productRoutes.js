import { Router } from 'express';
const router = Router();

import { addProductController, getAllProductsController } from '../controllers/productController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import adminMiddleware from '../middleware/adminMiddleware.js';

// Admin-only: Add Product
router.post('/add-product', authMiddleware, adminMiddleware, addProductController);

// Public: Get All Products
router.get('/products', getAllProductsController);

export default router;
