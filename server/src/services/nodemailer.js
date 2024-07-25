const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASSWORD_EMAIL
  }
});

const send = (name, phone, email, message) => {
  transporter.sendMail({
    from: process.env.USER_EMAIL,
    to: 'coopers@coopers.pro',
    subject: 'Um novo formulário foi submetido!',
    html: `
    <h1>Você recebeu um novo formulário!</h1>
    <div>
      <h2 style="display: inline-block; margin-right: 10px;">Nome do cliente:</h2>
      <h3 style="display: inline-block; font-weight: normal;">${name}</h3>
    </div>
    <div>
      <h2 style="display: inline-block; margin-right: 10px;">Telefone do cliente:</h2>
      <h3 style="display: inline-block; font-weight: normal;">${phone}</h3>
    </div>
    <div>
      <h2 style="display: inline-block; margin-right: 10px;">E-mail do cliente:</h2>
      <h3 style="display: inline-block; font-weight: normal;">${email}</h3>
    </div>
    <div>
      <h2 style="display: inline-block; margin-right: 10px;">Mensagem do cliente:</h2>
      <h3 style="display: inline-block; font-weight: normal;">${message}</h3>
    </div>
  `
  });
};


module.exports = send;