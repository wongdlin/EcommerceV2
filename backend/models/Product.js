const db = require("../config/db");

const Product = {
  getAllProductsWithImage: async (id) => {
    const [rows] = await db.query(
      `
      SELECT 
        p.id, 
        p.name, 
        p.description, 
        p.price, 
        p.stock,
        p.category_id, 
        pi.image_url,
        pi.alt_text,
        pi.is_primary
      FROM products p 
      LEFT JOIN product_images pi ON pi.product_id = p.id
      WHERE p.id = ?
    `,
      [id]
    );

    // Optionally, organize the results by primary vs other images
    const product = rows[0];
    if (product) {
      // Group the images based on their primary status
      product.images = rows.map((item) => ({
        image_url: item.image_url,
        alt_text: item.alt_text,
        is_primary: item.is_primary,
      }));
    }
    return product;
  },
  findAll: async () => {
    const [rows] = await db.query(`
      SELECT 
        p.*, 
        pi.image_url AS primary_image 
      FROM products p
      LEFT JOIN product_images pi 
        ON p.id = pi.product_id AND pi.is_primary = 1
    `);
    return rows;
  },
  findAllByCategory: async (id) => {
    const [rows] = await db.query(
      `
      SELECT 
      p.*, 
      pi.image_url AS primary_image 
      FROM products p
      LEFT JOIN product_images pi 
      ON p.id = pi.product_id AND pi.is_primary = 1
      WHERE p.category_id = ?
    `,
      [id]
    );
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
