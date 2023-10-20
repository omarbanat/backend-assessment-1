const Meme = require('../models/Meme');

const createMeme = async (req, res) => {
    try {
        const { imageUrl, textCaption, createdBy } = req.body;

        // Create a new meme
        const meme = new Meme({
            imageUrl,
            textCaption,
            createdBy,
        });

        // Save the meme to the database
        await meme.save();

        res.json({ message: 'Meme created' });
    } catch (error) {
        res.status(500).json({ error: error.message });     
    }
};

const findMemes = async (req, res) => {
    try {
        const memes = await Meme.find({});

        res.status(200).json({
            message: 'Memes found',
            data: memes,
        });
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred',
            error: error.message,
        });
    }
};

const updateMeme = async (req, res) => {
    try {
        const memeId = req.params.id;
        const { imageUrl, textCaption } = req.body;

        // Find the meme by ID
        const meme = await Meme.findById(memeId);

        if (!meme) {
            return res.status(404).json({ message: 'Meme not found' });
        }

        if (meme.createdBy.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'You are not the meme creator' });
        }

        meme.imageUrl = imageUrl;
        meme.textCaption = textCaption;

        // Save the updated meme
        await meme.save();

        res.json({ message: 'Meme updated' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteMeme = async (req, res) => {
    try {
        const memeId = req.params.id;

        // Find the meme by ID
        const meme = await Meme.findById(memeId);

        if (!meme) {
            return res.status(404).json({ message: 'Meme not found' });
        }

        if (meme.createdBy.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'You are not the meme creator' });
        }

        // Remove the meme from the database
        await meme.remove();

        res.json({ message: 'Meme deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createMeme,
    findMemes,
    updateMeme,
    deleteMeme,
};
