const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  UserName: { type: String, required: true, unique: true },
  UserEmail: { type: String, required: true, unique: true },
  UserPassword: { type: String, required: true },
  Role:{ type: String, required: true },
});

UserSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('UserPassword')) return next();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.UserPassword, salt);
    this.UserPassword = hashedPassword;

    return next();
  } catch (error) {
    return next(error);
  }
});

const User = model('User', UserSchema);

module.exports = User;
