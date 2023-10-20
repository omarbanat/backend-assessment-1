const Meme=require('../models/meme');
const add =async(req,res)=>{
    try{
        const meme=new Meme({
            img:req.body.img,
            text:req.body.text,
            creator:req.body.creator
        })
        const result=await meme.save();
        if(!result)throw new Error("An error occured");
        res.status(200).json({message:"Adding a meme successfully",result});
    }catch(error){
        res.status(500).json({message:"An error occured during adding a meme ",error})
    }
}
const getAllMemes=async(req,res)=>{
    try{
        const result=await Meme.find({});
        if(!result)throw new Error("An error occured");
        res.status(200).json({message:"Your memes",result});
    }catch(error){
        res.status(500).json({message:"An error occured during selecting memes ",error})
    }
}
const getOne =async(req,res)=>{
    try{
        const result=await Meme.findById({_id:req.params.id});
        if(!result)throw new Error("An error occured");
        res.status(200).json({message:"One meme selected successfully",result});
    }catch(error){
        res.status(500).json({message:"An error occured during selecting one meme by id ",error})
    }
}
const remove=async(req,res)=>{
    try{
        const result=await Meme.findById({_id:req.params.id});
        if(!result)throw new Error("An error occured");
        if(result.creator==req.body.creator){
            const del=await Meme.deleteOne({_id:req.params.id});
            if(!del) res.status(500).json({message:"An error occured during deleting one meme by id ",error})
        }
        res.status(200).json({message:"One meme deleted successfully",result});
    }catch(error){
        res.status(500).json({message:"An error occured during deleting one meme by id ",error})
    }
}
const update=async(req,res)=>{
    try{
        const result=await Meme.findById({
            _id:req.params.id,
        })
        if(!result)throw new Error("An error occured");
        if(result.creator==req.body.creator){
            const update=await Meme.updateOne({ _id:req.params.id},  {
                img: req.body.img,
                text: req.body.text,
                creator: req.body.creator,
            })
            if(!update)res.status(500).json({message:"An error occured during updating one meme",error})
        }
        res.status(200).json({message:"One meme updated successfully",result});
    }catch(error){
        res.status(500).json({message:"An error occured during updating one meme",error})
    }
}
module.exports={add,getAllMemes,getOne,remove,update};