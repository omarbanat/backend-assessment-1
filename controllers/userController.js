const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
    try {
        const { username, password, phone } = req.body; // Removed email field as it's not in the example

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            password: hashedPassword,
            isMemeCreator: true,
            phone,
        });

        const response = await user.save();
        if (!response) {
            throw new Error("An error occurred while saving the user.");
        }

        res.json({
            message: "User registered successfully",
            response,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "An error occurred",
            error: err.message,
        });
    }
};
