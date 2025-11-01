import Order from "../models/Order.js";
import Product from "../models/Product.js";

export const createOrder = async (req, res) => {
  try {
    const { products } = req.body;
    if (!products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ message: "No products in order" });
    }

    let totalPrice = 0;
    const session = await Product.startSession();
    session.startTransaction();

    try {
      for (const item of products) {
        const p = await Product.findById(item.product).session(session);
        if (!p) {
          await session.abortTransaction();
          return res
            .status(404)
            .json({ message: `Product ${item.product} not found` });
        }

        const qty = Number(item.quantity);
        if (p.countInStock < qty) {
          await session.abortTransaction();
          return res
            .status(400)
            .json({ message: `Not enough stock for ${p.name}` });
        }

        p.countInStock = p.countInStock - qty;
        await p.save({ session });

        totalPrice += p.price * qty;
      }

      const order = new Order({
        customer: req.user._id,
        products: products.map((it) => ({
          product: it.product,
          quantity: Number(it.quantity),
        })),
        totalPrice,
      });

      const created = await order.save({ session });
      await session.commitTransaction();
      session.endSession();

      res.status(201).json(created);
    } catch (err) {
      await session.abortTransaction();
      session.endSession();
      throw err;
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ customer: req.user._id })
      .populate("products.product", "name price image")
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
