const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");
const productRoutes = require("./routes/productRoutes")

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("From Backend Side");
});

app.use('/api/products', productRoutes);

app.use((req, res) => {
  console.log("Unknown path:", req.path);
  res.status(404).send("Not Found");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
