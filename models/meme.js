const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const meme=new Schema({
    image:{
        type:String,
        required: true,
        unique: true, 
    },
    text:{
        type:String,
        required: true,
        unique: true,
    },
    creator:{
        type:String,
        required: true,
        unique: true,
    }
}, {
    timestamps: true//new topic 
});
const Meme=mongoose.model('memes',meme);
module.exports=Meme;