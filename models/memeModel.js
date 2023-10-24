const mongoose = require('mongoose');
const { Schema, model } = mongoose;



const memeSchema = new Schema({
  imageUrl: {
    type: String,
  },
  textCaption: {
    type: String,
    required: true
  },
  userReference: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

const Meme = model('Meme', memeSchema);

module.exports = Meme;

