const express=require('express');
const con=require('./config/connection');
const memeRoutes=require('./routes/meme');
const userRoutes=require('./routes/user');
const cors=require('cors');
const app =express();
app.use(cors);
app.use(express.json());
PORT=5000;
con.Connection();
app.listen(PORT,()=>{
    console.log(`your are listening to port :${PORT}`);
});
app.use('/memes',memeRoutes)
app.use('/user',userRoutes);