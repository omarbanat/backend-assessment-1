const express = require('express');
const router = express.Router();
const user=require('../controllers/userController');
router.get('/get/:email/:password', user.getUser);
router.post('/add',user.addUser);
module.exports = router;
