var express = require('express');
var router = express.Router();
var db = require('../connection');
var user = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', {title: 'Register'});
});

router.post('/',function(requst, response){
	var uname = request.params.username;
	var pword = request.params.password;
	var newUser = new user({name: uname, password: pword});
});
module.exports = router;
