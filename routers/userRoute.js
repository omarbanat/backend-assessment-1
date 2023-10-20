const express = require('express');
const router = express.Router();
const User = require('../controllers/userController'); 

router.get('/get/:username/:password', User.getuser); 
router.post('/add', User.adduser); 

module.exports = router;



