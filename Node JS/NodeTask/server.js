import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/User.routes.js";
import productRoutes from "./routes/Product.routes.js";
import orderRoutes from "./routes/Order.routes.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

// app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
