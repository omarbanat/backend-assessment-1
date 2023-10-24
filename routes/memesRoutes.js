const express = require('express');
const router = express.Router();

const {
  getAllMemes,
  addMeme,
  updateMemeByID,
  deleteMeme,
} = require('../contollers/memesController');

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

router.get('/getAll', getAllMemes);
router.post('/add', upload.single('image'), addMeme);
router.put('/update/:ID', updateMemeByID);
router.delete('/delete/:ID', deleteMeme);

module.exports = router;
