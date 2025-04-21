const db = require("../config/db");

const Product = {
  findAll: async () => {
    const [rows] = await db.query("SELECT * FROM products");
    return rows;
  },
  findById: async (id) => {
    const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [id]);
    return rows;
  },
  create: async (data) => {
    const [rows] = await db.query("INSERT INTO products SET ?", data);
    return rows;
  },
  update: async (id, data) => {
    const [rows] = await db.query("UPDATE products SET ? WHERE id = ?", [
      data,
      id,
    ]);
    return rows;
  },
  delete: async (id) => {
    const [rows] = await db.query("DELETE FROM products WHERE id = ?", [id]);
    return rows;
  },
};

module.exports = Product;
