var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/sobre', function(req, res, next) {
  res.render('about', {page:'Sobre', menuId:'about'});
});

router.get('/contato_envio', (req, res) => {
  res.render('contact_send', {page:'Contato', menuId:'contact'});
});

router.get('/contato_erro', (req, res) => {
  res.render('contact_error', {page:'Contato', menuId:'contact'});
});

module.exports = router;