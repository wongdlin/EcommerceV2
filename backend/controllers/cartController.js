const Cart = require("../models/Cart");

const getCart = async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const cart = await Cart.getCart(userId);

    if (!cart || cart.length === 0) {
      return res.status(404).json({ error: "No products found." });
    }
    return res.status(200).json(cart);
  } catch (err) {
    console.error("Error fetching cart :", err);
    return res.status(500).json({ error: "Server error. Please try again later." });
  }
};

const addToCart = async (req, res) => {
  const userId = req.user?.id;
  const { productId, qty } = req.body;

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  if (!productId || !qty) {
    return res
      .status(400)
      .json({ error: "Product ID and quantity are required" });
  }
  try {
    await Cart.addTocart(userId, productId, qty);
    return res.status(200).json({ message: "Product added to cart" });
  } catch (err) {
    console.error("Error adding to cart:", err);
    return res
      .status(500)
      .json({ error: "Server error. Please try again later." });
  }
};

const removeFromCart = async (req, res) => {
  const userId = req.user?.id;
  const productId = req.params.id;

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  if (!productId) {
    return res.status(400).json({ error: "Product ID is required" });
  }
  try {
    await Cart.deleteFromCart(userId, productId);
    return res.status(200).json({ message: "Product removed from cart" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Server error. Please try again later." });
  }
};

const UpdateCartQty = async (req, res) => {
  const userId = req.user?.id;
  const { productId, change } = req.body;

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  if (!productId || !change) {
    return res.status(400).json({ error: "Product ID and qty is required" });
  }
  try {
    const getQty = await Cart.getProductQty(userId, productId);
    const currentQty = getQty[0].quantity;

    if (currentQty + change <= 0) {
      await Cart.deleteFromCart(userId, productId);
      return res.status(200).json({ message: "Product removed from cart" });
    }
    await Cart.updateCartQty(userId, productId, change);
    return res.status(200).json({ message: "Product quantity updated" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Server error. Please try again later." });
  }
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  UpdateCartQty,
};
