var express     = require('express'),
    bodyParser  = require('body-parser'),
    mailer      = require('emailjs/email'),
    app         = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// GLOBAL VARIABLES SET
app.locals.site = {
    title: 'Devin Digital Portfolio',
    navtitle: 'DevinDigital',
    description: "Web Developer and Computer Technician Devin Riegle's portfolio. View his completed projects and contact him for more information about his services"
};
app.locals.author = {
    name: 'Devin Riegle',
    location: 'Atlanta, GA',
    email: 'riegledevin@gmail.com'
};

var currentTime = new Date();

/*****************************/
/*  DEVIN's PORTFOLIO ROUTES */
/*****************************/
app.get('/', function(req, res){
   res.render('comingsoon.ejs');
});

app.get('/site', function(req, res){
    res.render('index.ejs');
});

app.post('/contact', function(req, res){
    res.send('Thank you for contacting us!');
});

app.listen(3000, "localhost", function(){
    console.log("Devin's Portfolio webserver started successfully @ " + currentTime.toString());
});
