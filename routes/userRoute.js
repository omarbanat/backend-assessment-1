const express = require('express');
const router = express.Router();
const user=require('../controllers/userController');
router.get('/get/:email/:password', user.getUser);
router.get('/getAll',user.getAllUsers);
router.post('/add',user.addUser);
router.delete('/delete',user.deleteAll);
module.exports = router;
