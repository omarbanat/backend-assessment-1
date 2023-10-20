const User=require('../models/user');
const bcrypt=require('bcryptjs');
const register = async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new User({
        email: req.body.email,
        password: hashedPassword,
        role:req.body.role
      });
      const response = await user.save();
      if (!response) {
        throw new Error("An error occurred while adding a user.");
      }
      res.json({
        message: "A user added successfully",
        response
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "An error occurred",
        error: err.message
      });
    }
  };
  const login=async(req,res)=>{
    try{
      let {email, password}=req.body;
      const result=await admin.findOne({email:email});
      if(! result)res.status(404).json({message:"An error occured"});
      const resultat= await bcrypt.compare(password, result.password);
      if(!resultat)res.status(401).json({message:"Wrong password"});
      res.json({
        message:"Login successfully"
      });
    }catch(error){
      console.log(error);
    }
  }
module.exports={register,login};