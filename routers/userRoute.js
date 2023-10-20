const express = require('express');
const router = express.Router();


const {
    getuser,
    adduser,
} = require('../controllers/memeController');

router.get('/get/:username/:password', getuser); 
router.post('/add', adduser); 

module.exports = router;



