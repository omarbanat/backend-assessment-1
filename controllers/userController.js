const Users = require('../models/User');
const bcrypt = require('bcrypt');

const getAllUsers = async (req, res) => {
    try {
      const User = await Users.find({});
      res.status(200).json({
        success: true,
        message: 'Data retrieved successfully',
        data: User,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to get data',
        error: error,
      });
    }
    };

  const getUserByID = async (req, res) => {
    try {
      const User = await Users.findById(req.params.ID);
      res.status(200).json({
        success: true,
        message: 'data retrieved successfully',
        data: User,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to get data by ID',
        error: error,
      });
    }
  };


  const addUser = async (req, res) => {
    try {
      const { UserName, UserEmail, UserPassword, Role } = req.body;
      const hashedPassword = await bcrypt.hash(UserPassword, 10);
      console.log('Hashed Password:', hashedPassword);
      const newUser = await Users.create({
        UserName,
        UserEmail,
        UserPassword: hashedPassword,
        Role,
      });
      console.log('New User:', newUser); 
      res.status(200).json({
        success: true,
        message: 'Data added successfully',
        data: newUser,
      });
    } catch (error) {
      console.error('Error:', error); 
      res.status(400).json({
        success: false,
        message: 'Unable to add data',
        error: error,
      });
    }
  };
  
  

  const deleteUserByID =  async (req, res) => {
    try {
      const User = await Users.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'Data deleted successfully',
        data: User,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to delete data',
        error: error,
      });
    }
    };
  

  const updateUserByID = async (req, res) => {
    try {
      const User = await Users.findByIdAndUpdate(req.params.ID, req.body);
      res.status(200).json({
        success: true,
        message: 'data updated successfully.',
        data: User,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Unable to update data',
        error: error,
      });
    }
  };

  module.exports = {
    getAllUsers,
    getUserByID ,
    addUser,
    updateUserByID,
    deleteUserByID,
  };