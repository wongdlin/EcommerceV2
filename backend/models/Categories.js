const db = require("../config/db");

const Categories = {
  findAll: async () => {
    const [rows] = await db.query("SELECT * FROM categories");
    return rows;
  },
  findById: async (id) => {
    const [rows] = await db.query("SELECT * FROM categories WHERE id = ?", [
      id,
    ]);
    return rows;
  },
  create: async (data) => {
    const [rows] = await db.query("INSERT INTO categories SET ?", data);
    return rows;
  },
  update: async (id, data) => {
    const [rows] = await db.query("UPDATE categories SET ? WHERE id = ?", [
      data,
      id,
    ]);
    return rows;
  },
  delete: async (id) => {
    const [rows] = await db.query("DELETE FROM categories WHERE id = ?", [id]);
    return rows;
  },
};

module.exports = Categories;
