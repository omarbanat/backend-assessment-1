const bcrypt = require('bcryptjs');
const User = require('../models/usersModel');

const addUser = async (req, res) => {
  try {
    const { username, email, password,role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const schema = new User({
      username,
      email,
      password: hashedPassword,
      role
    });

    const newUser = await schema.save();
    res.status(200).json({
      success: true,
      message: 'User added successfully',
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Unable to add User',
      error: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const { email, password } = req.params; 
    const user = await User.findOne({
      email 
    });
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found',
      });
      return;
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(401).json({
        success: false,
        message: 'Incorrect password',
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: 'User retrieved successfully',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Unable to get User data',
      error: error.message,
    });
  }
};


module.exports = { getUser, addUser };
