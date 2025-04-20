const Categories = require("../models/Categories");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Categories.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCategoriesById = async (req, res) => {
  const { id } = req.params;
  try {
    const categories = await getCategoriesById(id);
    if (categories) {
      res.json(categories);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllCategories,
  getCategoriesById,
};
