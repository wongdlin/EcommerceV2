const db = require("../config/db");

const Product = {
  findAll: () => {
    return db.query("SELECT * FROM products");
  },
  findById: (id) => {
    return db.query("SELECT * FROM products WHERE id = ?", [id]);
  },
  create: (data) => {
    return db.query("INSERT INTO products SET ?", data);
  },
  update: (id, data) => {
    return db.query("UPDATE products SET ? WHERE id = ?", [data, id]);
  },
  delete: (id) => {
    return db.query("DELETE FROM products WHERE id = ?", [id]);
  },
};

module.exports = Product;
