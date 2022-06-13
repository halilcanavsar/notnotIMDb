const User = require('../models/User');
const bcrypt = require('bcrypt');
const router = require('../routes/users');

const updateUser = async (req, res) => {
  console.log('req.user', req.user);
  console.log('req.params', req.params);

  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(403).json({ message: 'Unauthorized' });
  }
};

const deleteUser = async (req, res) => {

  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json('User deleted');
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(403).json({ message: 'Unauthorized' });
  }
}

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getAllUsers = async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query ? await User.find().sort({_id:-1}).limit(10) : await User.find(); // to sort from last to first
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

    } else {
      res.status(403).json({ message: 'Unauthorized' });
    }
  }

module.exports = { updateUser, deleteUser, getUser, getAllUsers };
