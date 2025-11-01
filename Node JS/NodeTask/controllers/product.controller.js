import Product from "../models/Product.js";
import fs from "fs";
import path from "path";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    // console.log("Product data ",req.body)

    const { name, price, countInStock } = req.body;
    let imagePath = "";

    if (req.file) {
      // console.log("FIle ",req.file)
      imagePath = `/uploads/${req.file.filename}`;
    }

    const product = new Product({
      name,
      price: Number(price),
      countInStock: Number(countInStock),
      image: imagePath,
      createdBy: req.user._id,
    });
    const created = await product.save();
    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { name, price, countInStock } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (req.file) {
      if (product.image && product.image.startsWith("/uploads/")) {
        const old = path.join(process.cwd(), product.image);
        if (fs.existsSync(old)) fs.unlinkSync(old);
      }
      product.image = `/uploads/${req.file.filename}`;
    }

    if (name) product.name = name;
    if (price !== undefined) product.price = Number(price);
    if (countInStock !== undefined) product.countInStock = Number(countInStock);

    const updated = await product.save();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    // console.log("Products ", product);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.image && product.image.startsWith("/uploads/")) {
      const filePath = path.join(process.cwd(), product.image);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    await Product.deleteOne({ _id: product._id });
    res.json({ message: "Product removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
