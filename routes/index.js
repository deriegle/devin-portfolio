const router = require('express').Router();
const emailer = require("emailjs/email");

// var server = emailer.server.connect({
// 	user: *****,
// 	password: ******,
// 	host: "smtp.gmail.com",
// 	ssl: true
// });

router.get('/', function(req, res){
   res.render('comingsoon.ejs');
});

router.get('/site', function(req, res){
    res.render('index.ejs');
});

router.post('/contact', function(req, res){
    var name 	= req.body.name;
    var email 	= req.body.email;
    var ques 	= req.body.ques;
    res.redirect('/site');
    
    /*
    server.send({
    	text: ques + " -> From: " + name + " (" + email + ")",
    	from: name + " <riegledevin@gmail.com>",
    	to: "Devin <riegledevin@gmail.com>",
    	subject: name + " - Contact from Website"
    }, function(err, message){ console.log(err || message)});
    res.redirect("/site");
    */
});

module.exports = router;