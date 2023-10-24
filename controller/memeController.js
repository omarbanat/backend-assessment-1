const Meme = require("../model/memeModel");

const getAllMemes = async (req, res) => {
  try {
    const meme = await Meme.find({});
    res.status(200).json({
      success: true,
      message: "Data retrieved successfully",
      data: meme,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "unable to get data",
      error: error,
    });
  }
};

const getMemeByID = async (req, res) => {
  try {
    const meme = await Meme.findById(req.params.ID);
    res.status(200).json({
      success: true,
      message: "Meme retrieved successfully",
      data: meme,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "unable to get meme by ID",
      error: error,
    });
  }
};

const addMeme = async (req, res) => {
  try {
    const meme = await Meme.create(req.body);
    res.status(200).json({
      success: true,
      message: "Meme added successfully",
      data: meme,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Meme not added successfully",
      error: error,
    });
  }
};

const updateMeme = async (req, res) => {
  try {
    const meme = await Meme.findByIdAndUpdate(req.params.ID, req.body);
    res.status(200).json({
      success: true,
      message: "Meme updated successfully.",
      data: meme,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to update meme",
      error: error,
    });
  }
};

const deleteMeme = async (req, res) => {
  try {
    const meme = await Meme.deleteOne({ _id: req.params.ID });
    res.status(200).json({
      success: true,
      message: "Meme deleted successfully",
      meme: meme,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error occured while deleting the meme",
      error: error,
    });
  }
};

module.exports = {
  getAllMemes,
  getMemeByID,
  addMeme,
  updateMeme,
  deleteMeme,
};
