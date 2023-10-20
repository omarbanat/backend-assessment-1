const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true,
    },
    textCaption: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Meme', memeSchema);
