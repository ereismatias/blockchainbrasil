var express = require('express');
var router = express.Router();
const url = require('url');
var db = require("../database.js")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/sobre', function(req, res, next) {
  res.render('about', {page:'Sobre', menuId:'about'});
});

router.get('/vagas', function(req, res, next) {
  res.render('vagas', {page:'Vagas', menuId:'vagas'});
});

router.get('/empresas', function(req, res, next) {
  res.render('empresas', {page:'Empresas', menuId:'empresas'});
});

router.get('/eventos', function(req, res, next) {
  res.render('eventos', {page:'Eventos', menuId:'eventos'});
});

router.get('/livros', function(req, res, next) {
  res.render('livros', {page:'Livros', menuId:'livros'});
});

router.get('/mundo', function(req, res, next) {
  res.render('mundo', {page:'Mundo', menuId:'mundo'});
});

router.get('/contato_envio', (req, res) => {
  res.render('contact_send', {page:'Contato', menuId:'contact'});
});

router.get('/newsletter', function(req, res, next) {
  res.render('newsletter', {page:'Newsletter', menuId:'newsletter'});
});

router.post('/newsletter', function(req, res, next) {

 var errors=[]
  if (!req.body.email){
    errors.push("Email não especificado.");
    return;
  }

   console.log(req.body.email)

   var sql ='INSERT INTO newsletter (name) VALUES (?)'
    db.run(sql, [req.body.email], function (err, result) {
        if (err){
          console.log('Erro na inserção SQLite.')
            /*res.status(400).json({"error": err.message})*/
            return;
        }
     });

  res.redirect('/newsletter');

});

router.get('/contato_erro', (req, res) => {
  res.render('contact_error', {page:'Contato', menuId:'contact'});
});

module.exports = router;