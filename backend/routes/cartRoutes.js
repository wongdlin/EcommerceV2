const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const authenticate = require("../middleware/authMiddleware");

router.get("/", authenticate, cartController.getCart);
router.post("/addToCart", authenticate, cartController.addToCart);
router.delete("/:id", authenticate, cartController.removeFromCart);
router.put("/:id",authenticate, cartController.reduceCartQty)

module.exports = router;
