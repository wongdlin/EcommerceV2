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
    res.status(500).json({ error: "Server error. Please try again later." });
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
    const product = await Cart.addTocart(userId, productId, qty);
    res.status(200).json({ message: "Product added to cart" });
  } catch (err) {
    console.error("Error adding to cart:", err);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

const removeFromCart = async (req,res) =>{
  const userId = req.user?.id;
  const productId = req.params.id;

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  if (!productId) {
    return res
      .status(400)
      .json({ error: "Product ID is required" });
  }
  try {
    await Cart.deleteFromCart(userId, productId);
    res.status(200).json({ message: "Product removed from cart" });
  } catch (err) {
    res.status(500).json({ error: "Server error. Please try again later." });
  }
}

const reduceCartQty = async (req,res) =>{

}

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  reduceCartQty,
};
