var express = require('express');
var router = express.Router();

router.get('/register',function (res,req,next) {
    res.render('register',{title: 'Registration Page'});
});


module.exports =  router;