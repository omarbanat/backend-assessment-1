const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
// const bcrypt = require('bcrypt');
const app = express();
const memeRoutes = require('./routes/memeRoutes');
app.use(cors()); // Place cors middleware first for proper handling
app.use(express.json());
// Use the experiences route
app.use('/api/memes', memeRoutes);

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://karimsardouk727:test1@cluster0.m1b7hy4.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("Bravo! Connected to MongoDB!");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

// Start server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    connectDB(); // Connect to DB when server starts
});
