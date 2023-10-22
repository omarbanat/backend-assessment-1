require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const Memester = require('./models/memeModel');
const memeRoutes = require('./routes/memeRoutes');

const app = express();


app.use(express.json());


app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/memesters', memeRoutes);


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to the database');

        app.listen(process.env.PORT, () => {
            console.log('Listening for requests on port', process.env.PORT);
        });
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });
