const Cart = require("../models/Cart");

const getCart = async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const cart = await Cart.getCart(userId);

    if (!cart || cart.length === 0) {
      return res.status(404).json({ message: "No products found." });
    }
    return res.status(200).json(cart);
  } catch (err) {
    console.error("Error fetching cart :", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

const addToCart = async (req, res) => {
  console.log("products:",req.body)
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } catch (err) {
    console.error("Error adding to cart:", err)
    res.status(500).json({message: "Server error. Please try again later."})
  }
};

module.exports = {
  getCart,
  addToCart,
};
