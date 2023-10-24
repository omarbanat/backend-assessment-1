const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const usersSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = model('Users', usersSchema);

module.exports = User;
