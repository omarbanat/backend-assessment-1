const express = require('express');
const router = express.Router();


const {
    getAllmemes,
    getmemebyID,
    addmeme,
    updatememeByID,
    deletememe,
} = require('../controllers/memeController');

router.get('/get', getAllmemes);
router.get('/get/:ID', getmemebyID);
router.post('/add', addmeme);
router.put('/update/:ID', updatememeByID);
router.delete('/delete/:ID', deletememe);

module.exports = router;

