const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define User schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address']
  },
  // Add password field here
  password: {
    type: String,
    required: true, // you can set false if existing users don't have passwords yet
    
  }
}, {timestamps: true});

// Create model
const User = mongoose.model('User', userSchema);

module.exports = User;
