const express = require('express');
const router = express.Router();
const memeController = require('../controllers/memeController');

router.post('/create', memeController.createMeme);

// Create an API endpoint for updating memes
router.put('/:id', memeController.updateMeme);

router.delete('/:id', memeController.deleteMeme);

module.exports = router;
