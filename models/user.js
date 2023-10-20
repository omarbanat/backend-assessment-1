const mongoose=require('mongoose');
const schema=mongoose.Schema;
const userSchema=new schema({
    email:{
        type:String,
        required: true,
        unique: true, 
    },
    password:{
        type:String,
        required: true,
    },
    role:{
        type:String,
        required: true,
        
    }
});
const user=mongoose.model('users',userSchema);
module.exports=user;