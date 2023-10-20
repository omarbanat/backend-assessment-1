const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
//   creator: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//     required: true,
//   },
});

module.exports = mongoose.model('Meme', memeSchema);
