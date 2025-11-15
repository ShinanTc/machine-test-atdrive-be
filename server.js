const express = require('express');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Base Routes
app.use('/api/products', productRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
