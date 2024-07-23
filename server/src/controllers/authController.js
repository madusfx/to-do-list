const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/users', async (req, res) => {
  const { username, email } = req.body;

  try {
    if (await User.findOne({ username })) {
      return res.status(400).send({ error: 'this user already exists' })
    }
    else if (await User.findOne({ email })) {
      return res.status(400).send({ error: 'this email is already registered' })
    }

    user.password = undefined;
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

module.exports = (app) => app.use('/auth', router);