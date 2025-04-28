const db = require("../config/db");

const Cart = {
  getCart: async (id) => {
    const [rows] = await db.query(
      `SELECT p.name, p.price, c.id, c.quantity, i.image_url FROM products p LEFT JOIN cart c ON p.id = c.product_id LEFT JOIN product_images i ON i.product_id = p.id AND i.is_primary = 1 WHERE c.customer_id = ?;`,
      [id]
    );
    return rows;
  },
  addTocart: async (id, productId, qty) => {
    const [rows] = await db.query(
      `INSERT INTO cart (customer_id, product_id, quantity) VALUES (?,?,?) ON DUPLICATE KEY UPDATE quantity = quantity + ?`,
      [id, productId, qty, qty]
    );
    return rows;
  },
  deleteFromCart: async (id, productId) => {
    const [rows] = await db.query(
      `DELETE FROM cart WHERE customer_id =? AND product_id=?`,
      [id, productId]
    );
    return rows;
  },
};

module.exports = Cart;
