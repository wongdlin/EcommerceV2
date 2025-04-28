const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController')
const authenticate = require('../middleware/authMiddleware')

router.get('/', authenticate,cartController.getCart);
router.post('/addToCart',authenticate,cartController.addToCart);

module.exports = router;
