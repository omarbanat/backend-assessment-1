const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const memeSchema = new Schema({
  text: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  // image:{type:String}
});

// schema should include fields for image URLs, text captions, and user references (for the meme creator).
const Meme = model("Meme", memeSchema);

module.exports = Meme;
