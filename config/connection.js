require('dotenv').config();
const Mongo_url=process.env.MONGO_URL;
const mongoose=require("mongoose")
async function  Connection(){
    try{
        await mongoose.connect(Mongo_url);
        console.log("Connecting to database successfully");
    }
    catch(error){
        console.log("An error occured");
        console.log(error);
    }
}
module.exports={Connection};