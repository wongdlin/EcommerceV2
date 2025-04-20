const db = require("../config/db");

const Categories = {
  findAll: () => {
    return db.query("SELECT * FROM categories");
  },
  findById: (id) => {
    return db.query("SELECT * FROM categories WHERE id = ?", [id]);
  },
  create: (data) => {
    return db.query("INSERT INTO categories SET ?", data);
  },
  update: (id, data) => {
    return db.query("UPDATE categories SET ? WHERE id = ?", [data, id]);
  },
  delete: (id) => {
    return db.query("DELETE FROM categories WHERE id = ?", [id]);
  },
};

module.exports = Categories;
