// backend/seeder.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/product.js'; // Adjust path if needed

dotenv.config();

const dummyProducts = [
  {
    name: 'Nike Air Max',
    price: 120,
    description: 'Comfortable running shoes',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Adidas UltraBoost',
    price: 150,
    description: 'High-performance sport shoes',
    image: 'https://source.unsplash.com/random/300x200?adidas',
  },
  {
    name: 'Puma Street Rider',
    price: 100,
    description: 'Stylish casual sneakers',
    image: 'https://source.unsplash.com/random/300x200?puma',
  },
  {
    name: 'Jordan Retro',
    price: 140,
    description: 'Legendary Jordan sneakers',
    image: 'https://source.unsplash.com/random/300x200?jordan',
  },
  {
    name: 'Reebok Classic',
    price: 90,
    description: 'Everyday casuals',
    image: 'https://source.unsplash.com/random/300x200?reebok',
  },
  {
    name: 'New Balance 990',
    price: 130,
    description: 'Dad-style sneakers with comfort',
    image: 'https://source.unsplash.com/random/300x200?newbalance',
  },
];



const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany(); // Clears existing products
    const inserted = await Product.insertMany(dummyProducts);
    console.log(`✅ Seeded ${inserted.length} products`);
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding:', err);
    process.exit(1);
  }
};

seedProducts();
