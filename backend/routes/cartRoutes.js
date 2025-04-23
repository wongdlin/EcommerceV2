const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController')
const authenticate = require('../middleware/authMiddleware')

router.get('/', authenticate,cartController.getCart);

module.exports = router;
