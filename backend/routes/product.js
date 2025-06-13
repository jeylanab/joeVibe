import express from 'express';
import Product from '../models/product.js';
import { verifyAdmin } from '../middleware/verifyToken.js';

const router = express.Router();

// ➕ Create product (admin only)
router.post("/", verifyAdmin, async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔍 Get all productsFROM THE LIST
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
