const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const mainRoutes = require('./routes/mainRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Mount API base
app.use('/api', mainRoutes);

module.exports = app;
