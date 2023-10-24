const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const {
    getAllMemes,
    getMemeByID ,
    addMeme,
    deleteMemeByID,
    updateMemeByID ,
    getMemeByUserId,
} = require('../controllers/memeController');

router.post('/add',upload.single('image'), addMeme);
router.get('/getAll', getAllMemes);
router.get('/getByID/:ID', getMemeByID);
router.get('/getByUserId/:UserId', getMemeByUserId);
router.put('/update/:ID',  updateMemeByID);
router.delete('/delete/:ID', deleteMemeByID);




module.exports = router;