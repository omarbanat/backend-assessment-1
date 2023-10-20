// Load environment variables
require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });


