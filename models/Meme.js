const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const memesSchema = new Schema(
  {
    image: { type: String, required: true },
    textCaption: { type: String, required: true },
    user_id: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Meme = model('Memes', memesSchema);

module.exports = Meme;
