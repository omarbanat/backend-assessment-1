const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://karimsardouk727:test1@cluster0.m1b7hy4.mongodb.net/?retryWrites=true&w=majority",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log('Connected to MongoDB!');
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
};
module.exports=connectDB;
//done