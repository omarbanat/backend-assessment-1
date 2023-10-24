const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URL = process.env.MONGODB_URL;

async function connectToDatabase() {
  await mongoose.connect(MONGODB_URL);          
  }

connectToDatabase();
module.exports = connectToDatabase;
