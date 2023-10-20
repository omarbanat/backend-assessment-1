const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Import dotenv

// Load environment variables from .env
dotenv.config();

const dbURI = process.env.MONGO_URL; // Use your environment variable

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = connectToMongoDB;
