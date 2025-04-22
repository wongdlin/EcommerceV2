const Categories = require("../models/Categories");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Categories.findAll();
    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: "No categories found." });
    }
    return res.status(200).json(categories);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

const getCategoriesById = async (req, res) => {
  const { id } = req.params;
  try {
    const categories = await getCategoriesById(id);
    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: "No categories of this id not found." });
    }
    return res.status(200).json(categories);
  } catch (err) {
    console.error("Error fetching categories by this id:", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = {
  getAllCategories,
  getCategoriesById,
};
