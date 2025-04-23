const express = require("express");
const app = express();
const cors = require("cors");
const productRoutes = require("./routes/productRoutes")
const categoriesRoutes = require("./routes/categoriesRoutes")
const authRoutes = require('./routes/authRoutes')
const cartRoute = require('./routes/cartRoutes')

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("From Backend Side");
});

app.use('/api/products', productRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/auth', authRoutes)
app.use('/api/cart', cartRoute)

app.use((req, res) => {
  console.log("Unknown path:", req.path);
  res.status(404).send("Not Found");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
