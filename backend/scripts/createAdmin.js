// scripts/createAdmin.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/user.js'; // use .js extension in ESM

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const adminExists = await User.findOne({ email: "admin@joevibe.com" });
    if (adminExists) {
      console.log("⚠️ Admin already exists");
    } else {
      const admin = new User({
        name: "Admin Joe",
        email: "admin@joevibe.com",
        password: "admin1234", // hash this in production!
        role: "admin",
      });
      await admin.save();
      console.log("✅ Admin created successfully");
    }

    process.exit();
  } catch (err) {
    console.error("❌ Error creating admin:", err);
    process.exit(1);
  }
};

createAdmin();

