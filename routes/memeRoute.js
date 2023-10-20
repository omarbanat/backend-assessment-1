const express = require('express');
const router = express.Router();
const meme=require('../controllers/memeController');
router.get('/getAllMemes', meme.getAllMemes);
router.get('/getMemesByCreator/:creator', meme.getMemesByCreator);
router.post('/add',meme.addMeme);
router.put('/update/:id',meme.updateMemeByID);
router.delete('/delete/:id',meme.deleteMemeByID);
module.exports = router;
