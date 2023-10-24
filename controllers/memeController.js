const Meme = require('../models/memeModel');
const axios = require('axios');
require('dotenv').config();





const getAllmemes = async (req, res) => {
  try {
    const memes = await Meme.find({});
    res.status(200).json({
      success: true,
      message: 'Data retrieved successfully',
      data: memes,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'unable to get data',
      error: error,
    });
  }
};

const getmemebyID = async (req, res) => {
  try {
    const memes = await Meme.findById(req.params.ID);
    res.status(200).json({
      success: true,
      message: 'Meme retrieved successfully',
      data: memes,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'unable to get experience by ID',
      error: error,
    });
  }
};


//  const  addmeme = async (req, res) => {
//   try {
//     const { textCaption, userReference } = req.body;




//     res.status(201).json(newMeme);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred.' });
//   }
// };

const addmeme = async (req, res) => {
    const { imageUrl, textCaption, userReference } = req.body;
    try {
      // Create a FormData object and append the image buffer
      const formData = new FormData();
      formData.append('key', process.env.key);
      formData.append('image', req.file.buffer, {
        filename: 'meme.jpg', // Set the filename here
      });
      console.log(req.file.buffer);
  
      // Use the correct axios configuration for file upload
      const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
        headers: {
          ...formData.getHeaders(), // Set proper headers for form data
        },
      });
      console.log(response);
  
      const image_URL = response.data.data.url;
  
      const memes = await Meme.create({ imageUrl: image_URL, textCaption, userReference });
      res.status(200).json({
        success: true,
        message: 'Meme added successfully',
        data: memes,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Meme not added successfully',
        error: error,
      });
    }
  };
  

const updatememeByID = async (req, res) => {
  try {
    const memes = await Meme.findByIdAndUpdate(req.params.ID, req.body);
    res.status(200).json({
      success: true,
      message: 'meme updated successfully.',
      data: memes,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Unable to update meme',
      error: error,
    });
  }
};

const deletememe = async (req, res) => {
  try {
    const memes = await Meme.deleteOne({ _id: req.params.ID });
    res.status(200).json({
      success: true,
      message: 'meme deleted successfully',
      blog: memes,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error occured while deleting the meme',
      error: error,
    });
  }
};

module.exports = {
    getAllmemes,
    getmemebyID,
    addmeme,
    updatememeByID,
    deletememe,
};
