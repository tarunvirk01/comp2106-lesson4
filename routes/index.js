var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson4',
  message: 'Node home page'
});
});

// Get register
router.get('/register', function(req, res, next) {
  res.render('register')
})

// GET Login
router.get('/login', function(req, res, next) {
  res.render('login')
})
module.exports = router;
