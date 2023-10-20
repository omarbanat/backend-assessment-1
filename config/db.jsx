const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

async function connectToDatabase() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
}

connectToDatabase();
module.exports = connectToDatabase;
