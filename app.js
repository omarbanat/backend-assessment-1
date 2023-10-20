require('dotenv').config();
const cors = require('cors');
const express = require('express');
const dbConnection = require('./config/db');
const firebaseConfig = require('./config/firebase');
const { initializeApp } = require('firebase/app');
initializeApp(firebaseConfig);

const userRoute = require('./routes/userRoute');
const memeRoute = require('./routes/memeRoute');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/User', userRoute);
app.use('/Meme', memeRoute);

app.listen(port, () => {
    dbConnection()
      .then(() => console.log('success'))
      .catch((err) => console.log(err));
    console.log(`Example app listening on port ${port}`);
  });