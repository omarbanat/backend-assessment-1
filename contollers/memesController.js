const { imageUploader } = require('../extra/imageUploader');
const Meme = require('../models/Meme');

const getAllMemes = async (req, res) => {
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
      message: 'Unable to get data',
      error: error,
    });
  }
};

const addMeme = async (req, res) => {
  try {
    const imageURL = await imageUploader(req);

    const meme = await Meme.create({
      ...req.body,
      image: imageURL,
    });
    res.status(200).json({
      success: true,
      message: 'Meme added successfully',
      data: meme,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Meme not added successfully',
      error: error,
    });
  }
};

const updateMemeByID = async (req, res) => {
  try {
    const meme = await Meme.findByIdAndUpdate(req.params.ID, req.body);
    res.status(200).json({
      success: true,
      message: 'Meme updated successfully.',
      data: meme,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Unable to update meme',
      error: error,
    });
  }
};

const deleteMeme = async (req, res) => {
  try {
    const meme = await Meme.deleteOne({ _id: req.params.ID });
    res.status(200).json({
      success: true,
      message: 'Meme deleted successfully',
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
  getAllMemes,
  addMeme,
  updateMemeByID,
  deleteMeme,
};
