const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found." });
    }
    return res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching products :", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

const getProductByCategoryId = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.findAllByCategory(id);

    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found in this category." });
    }
    return res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching products by category:", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.getAllProductsWithImage(id);

    if (!products || products.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductByCategoryId,
};
