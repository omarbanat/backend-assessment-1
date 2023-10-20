const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    getUserByID ,
    addUser,
    updateUserByID,
    deleteUserByID,
} = require('../controllers/userController');

router.get('/getAll',  getAllUsers);
router.get('/getByID/:ID',  getUserByID);
router.post('/add',  addUser);
router.put('/update/:ID', updateUserByID);
router.delete('/delete/:ID', deleteUserByID);

module.exports = router;