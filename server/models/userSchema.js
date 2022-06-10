const mongoose = require('mongoose');

const user = new mongoose.Schema ({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
    unique: false,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      }
    },
    // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    // message: 'Please fill a valid email address',
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  }, {timestamps: true, collection: 'user'});

  const User = mongoose.model('User', user);


  module.exports = User;