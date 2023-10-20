require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./config/connection');
const userRoutes= require('./routes/userRoute');
const memeRoutes = require('./routes/memeRoute');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use('/users',userRoutes);
app.use('/memes',memeRoutes);
app.listen(port, () => {
    connection.checkConnection();
    console.log('success');
});