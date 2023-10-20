const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const adduser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(200).json({
      success: true,
      message: 'User added successfully',
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Unable to add user',
      error: error.message,
    });
  }
};

const getuser = async (req, res) => {
  try {
    const { username, password } = req.params;

    const user = await User.findOne({ username });

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
      message: 'Unable to get user data',
      error: error.message,
    });
  }
};

module.exports = {
  adduser,
  getuser,
};
