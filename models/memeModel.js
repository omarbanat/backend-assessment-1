const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
} ,{ timestamps: true }); 

const Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;
