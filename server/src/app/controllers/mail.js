// src/app/controllers/mail.js
const express = require('express');
const send = require('../../services/nodemailer');
const router = express.Router();

const sendMail = async (req, res) => {
  const { name, phone, email, message } = req.body;
  send(name, phone, email, message);

  return res.json('Email successfully sent!');
}

router.post('/send', sendMail);

module.exports = (app) => app.use('/mail', router);
