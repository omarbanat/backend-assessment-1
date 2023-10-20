require('dotenv').config();
const mongoose = require('mongoose');
const Mongo_DB_URL = process.env.Mongo_DB_URL;



async function dbConnection() {
  try {
    await mongoose.connect(Mongo_DB_URL);
    console.log('WOOHOOO success');
  } catch (error) {
    console.log(error);
  }
}

dbConnection();

module.exports = dbConnection;