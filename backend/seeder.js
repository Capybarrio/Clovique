const mongoose = require("mongoose");
const dns = require("dns");
const dotenv = require("dotenv");
const path = require("path");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart");
const products = require("./data/products");
const connectDB = require("./config/db");

dotenv.config({ path: path.join(__dirname, ".env") });
dns.setServers(["8.8.8.8", "1.1.1.1"]);

// Function to seed data
const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    // Create a default admin User
    const createdUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "123456",
      role: "admin",
    });

    // Assign the default user ID to each product
    const userID = createdUser._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: userID };
    });
    // Insert the products into the database
    await Product.insertMany(sampleProducts);

    console.log("Product data seeded successfully!");
    await mongoose.connection.close();
    process.exit();
  } catch (error) {
    console.error("Error seeding the data:", error);
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
    }
    process.exit(1);
  }
};

seedData();
