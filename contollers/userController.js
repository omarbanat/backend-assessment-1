const User = require('../models/User');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({ ...req.body, password: hashedPassword });

    return res.status(200).json({
      success: true,
      message: 'User added successfully',
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Error occured while user is registering',
      error,
    });
  }
};

const login = async (req, res) => {
  try {
    let { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }
    const result = await bcrypt.compare(password, user.password);

    if (!result) {
      return res.status(401).json({
        success: false,
        message: 'Wrong password',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Login successfully',
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Error occured while login',
      error,
    });
  }
};

module.exports = { login, register };
