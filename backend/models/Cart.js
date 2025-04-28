const db = require("../config/db");

const Cart = {
  getCart: async (id) => {
    const [rows] = await db.query(
      `SELECT * FROM cart WHERE customer_id = ? ORDER BY created_at ASC`,
      [id]
    );
    return rows;
  },
  addTocart: async (id, productId, qty) => {
    const [rows] = await db.query(
      `INSERT INTO cart (customer_id, product_id, quantity) VALUES (?,?,?)`,
      [id, productId, qty]
    );
    return rows;
  },
};

module.exports = Cart;
