const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const meme=new Schema({
    img:{
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
    }
}, {
    timestamps: true//new topic 
});
const Meme=mongoose.model('memes',meme);
module.exports=Meme;