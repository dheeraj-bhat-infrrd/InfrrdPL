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
    res.render('register',{ title: 'Registration Page' });
});

router.post('/submit',function(req,res,next){
    req.check('email','Invalid Email').isEmail();
    req.check('password','Password is invalid').isLength({min:4}).equals(req.body.confirmPassword);

    var errors =  req.validationErrors();
    if(errors) {
        req.session.errors =  errors;
        req.session.success =false;
    }
    else{
        var item = {
            title: req.body.email,
            password: req.body.password
        };

        var data = new userData(item);
        data.save();
        req.session.success = true;
    }
    res.redirect('/');

});
module.exports = router;