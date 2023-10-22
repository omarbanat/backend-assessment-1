const User = require('../models/userModel');

const registerUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: 'Registration successful.' });
    } catch (error) {
        res.status(500).json({ message: 'Error while registering.' });
    }
};

module.exports = {
    registerUser,
};
