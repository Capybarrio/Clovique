const express = require("express");
const cors = require("cors");
const dns = require("dns");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const subscribeRoute = require("./routes/subscribeRoute");
const adminRoutes = require("./routes/adminRoutes");
const productAdminRoutes = require("./routes/productAdminRoutes");
const adminOrderRoutes = require("./routes/adminOrderRoutes");
const syncSeedProducts = require("./utils/syncSeedProducts");

dotenv.config({ path: path.join(__dirname, ".env") });
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  "/products",
  express.static(path.join(__dirname, "..", "frontend", "public", "products")),
);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("WELLCOME TO API");
});

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api", subscribeRoute);

// Admin
app.use("/api/admin/users", adminRoutes);
app.use("/api/admin/products", productAdminRoutes);
app.use("/api/admin/orders", adminOrderRoutes);

const startServer = async () => {
  try {
    await connectDB();
    const syncedProductsCount = await syncSeedProducts();
    console.log(`Catalog synced from products.js: ${syncedProductsCount} products`);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Server startup aborted.", err);
    process.exit(1);
  }
};

startServer();
