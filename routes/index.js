var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/IPLData');
var Schema = mongoose.Schema;

var userDataSchema =  new Schema({
    email: {type: String, required:true},
    password: {type: String, required:true},
    active: Boolean
},{collection: 'userData'});

var userData = mongoose.model('UserData',userDataSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Infrrd Premier League' });
});

router.get('/login',function (req,res,next) {
    res.render('login',{ title: 'Login Page' });
});

router.get('/register',function (req,res,next) {
    res.render('register',{ layout:'regLayout.hbs',title: 'Registration Page' });
});


module.exports = router;