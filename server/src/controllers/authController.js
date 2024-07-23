const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const router = express.Router();

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  })
}

router.post('/users', async (req, res) => {
  const { username, email } = req.body;

  try {
    if (await User.findOne({ username })) {
      return res.status(400).send({ error: 'this user already exists' })
    }
    else if (await User.findOne({ email })) {
      return res.status(400).send({ error: 'this email is already registered' })
    }

    const user = new User(req.body);
    await user.save();
    user.password = undefined;
    res.status(201).send({
      user,
      token: generateToken({ id: user.id }),
    });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).select('+password');

  if (!user) {
    return res.status(400).send({ error: 'user not found' });
  }
  if (!await bcrypt.compare(password, user.password)) {
    return res.status(400).send({ error: 'invalid password' });
  }

  user.password = undefined;

  res.send({ 
    user, 
    token: generateToken({ id: user.id }),
  });
})

module.exports = (app) => app.use('/auth', router);