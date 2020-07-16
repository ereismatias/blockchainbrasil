const express = require('express');
const url = require('url');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('contact', {page:'Contato', menuId:'contact'});
  });

/* router.post('/envia', (req, res) => { */
router.post('/envia', function(req, res, next) {

  var name = req.body.name;
  var email = req.body.email;
  var enquiry = req.body.enquiry;

  var emailMessage = `Olá ${name},\n\nObrigado por nos contatar.\n\nSeu email é: ${email}.\n\nSua mensagem é: ${enquiry}\n.`;

  console.log(emailMessage);
  res.redirect('/contato_envio');

  var transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    secure: false,
    auth: {
      user: 'a5cc544e0ffb4d',
      pass: '1868140316c4e5'
    
  }});

  var emailOptions = {
    from: 'contato@blockchainbrasil.org',
    to: email,
    subject: 'Formulário Contato BlockchainBrasil.org',
    text: emailMessage
  };

  transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.redirect('/contato_envio');
    } else {
      console.log('Mensagem enviada: ' + info.response);
      console.log('Email: ' + emailMessage);
      res.redirect('/contato_erro');
    }
  });
});

module.exports = router;