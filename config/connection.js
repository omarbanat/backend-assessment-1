const mongoose = require('mongoose');
const DatabaseUrl = process.env.DatabaseUrl;

 async function checkConnection() {
   try {
     await mongoose.connect(DatabaseUrl);
     console.log('connected');
   } catch (error) {
     console.log(error);
   }
  }
module.exports = {checkConnection};
