require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnection = require('./config/db');

const userRoute = require('./routers/userRoute');
const memeRouter = require('./routers/memeRouter');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/users', userRoute);
app.use('/meme', memeRouter)




app.listen(port, () => {
  dbConnection()
    .then(() => console.log('woohoo Connected successfully'))
    .catch((err) => console.log(err));
  console.log(`App listening on port ${port}`);
});