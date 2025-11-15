const express = require('express');
const router = express.Router();

// Import feature route modules
const productRoutes = require('./products/productRoutes');

// Mount route groups
router.use('/products', productRoutes);

module.exports = router;
