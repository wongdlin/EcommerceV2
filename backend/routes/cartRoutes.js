const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const authenticate = require("../middleware/authMiddleware");

router.get("/", authenticate, cartController.getCart);
router.post("/addToCart", authenticate, cartController.addToCart);
router.delete("/:id", authenticate, cartController.removeFromCart);
router.put("/",authenticate, cartController.UpdateCartQty)

module.exports = router;
