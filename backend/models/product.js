import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String }, // URL or path
  description: { type: String },
  category: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Product", productSchema);
