const express = require('express');
const router = express.Router();

const {
    getAllMemes,
    getMemeByID,
    addMeme,
    updateMemeByID,
    deleteMeme,
} = require('../controllers/memeController');


router.getAll('/getAll', getAllMemes);
router.get('/get/:ID', getMemeByID);
router.post('/add', addMeme);
router.put('/update/:ID', updateMemeByID);
router.delete('/delete/:ID', deleteMeme);

module.exports = router;
