const Meme = require('../models/memeModel');

const addMeme= async (req,res)=>{
  try {
    const schema=new Meme({
      imageUrl:req.body.imageUrl,
      caption:req.body.caption,
      creator:req.body.creator
    });
    const newMeme = await schema.save();
    res.status(200).json({
      success: true,
      message: 'Meme added successfully',
      data: newMeme,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'unable to add meme',
      error: error,
    });
  }
}
const getMemesByCreator = async (req, res) => {
    const creator=req.params.creator;
  try {
    const memes = await Meme.find({creator});
    res.status(200).json({
      success: true,
      message: 'Meme/s retrieved successfully',
      data: memes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'unable to get data',
      error: error,
    });
  }
};

const getAllMemes = async (req, res) => {
  try {
    const memes = await Meme.find();
    res.status(200).json({
      success: true,
      message: 'Memes retrieved successfully',
      data: memes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'unable to get data',
      error: error,
    });
  }
};

const updateMemeByID = async (req, res) => {
    try {
      const meme = await Meme.findById(req.params.id);
      if (!meme) {
        return res.status(404).json({
          success: false,
          message: 'Meme not found',
        });
      }
      if (meme.creator !== req.body.username) {
        return res.status(403).json({
          success: false,
          message: 'You are not the creator of this meme. Access denied.',
        });
      }
      const updatedMeme = await Meme.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: 'Updated successfully.',
        data: updatedMeme,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Unable to update meme',
        error: error,
      });
    }
  };

  const deleteMemeByID = async (req, res) => {
    try {
      const meme = await Meme.findById(req.params.id);
      if (!meme) {
        return res.status(404).json({
          success: false,
          message: 'Meme not found',
        });
      }
      if (meme.creator !== req.body.username) {
        return res.status(403).json({
          success: false,
          message: 'You are not the creator of this meme.',
        });
      }
      await Meme.findByIdAndDelete(req.params.id);
  
      res.status(200).json({
        success: true,
        message: 'Deleted successfully.',
        data: meme,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Unable to delete meme',
        error: error,
      });
    }
  };
  
  
module.exports = {addMeme,getMemesByCreator, getAllMemes,updateMemeByID,deleteMemeByID};
