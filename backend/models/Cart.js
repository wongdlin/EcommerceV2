const db = require("../config/db");

const Cart = {
  getCart: async (id) => {
    const [rows] = await db.query(`SELECT * FROM cart WHERE customer_id = ? ORDER BY created_at ASC`, [
      id,
    ]);
    return rows;
  },
};

module.exports = Cart;
