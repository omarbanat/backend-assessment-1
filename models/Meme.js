const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const MemeSchema = new Schema({
    MemeTitle: { type: String, required: true },
    MemeImage: { type: String, required: true },
    MemeCaption: { type: String, required: true },
    UserId: { type: String, required: true },
}, {
    timestamps: true 
});

const Meme = model('Memes', MemeSchema);

module.exports = Meme;
