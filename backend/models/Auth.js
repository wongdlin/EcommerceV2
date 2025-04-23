const db = require("../config/db");

const Auth = {
  create: async (data) => {
    const [result] = await db.query("INSERT INTO customers SET ?", data);
    return result;
  },
  findByEmail: async (data) =>{
    const [rows] = await db.query("SELECT * FROM customers WHERE email = ?", data);
    return rows;
  }
};
module.exports = Auth;
