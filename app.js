var express     = require('express'),
    mongoose    = require('mongoose'),
    bodyParser  = require('body-parser'),
    mailer      = require('emailjs/email'),
    Todo        = require('./models/todo.js'),
    seedTodos   = require('./todos.js'),
    app         = express();

mongoose.connect("mongodb://localhost/deepclean");

seedTodos();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

var server 	= mailer.server.connect({
   user:	"riegledevin@gmail.com", 
   password:"Gigabitdarkhost1", 
   host:	"smtp.gmail.com", 
   ssl:		true
});

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


/***********************/
/* IHOP ATLANTA ROUTES */
/***********************/
app.get('/ihop/deepclean', function(req, res){
    Todo.find({}, function(err, allTodos){
        if(err){
            console.log(err);
        } else {
            res.render('ihop/deepclean.ejs', {todos: allTodos});
        }
    });
});

function getTimeAndDate(){
    // Fix time, because server is 4 hours ahead of EST
    // Format Date & Time correctly
    currentTime.setMinutes(-240);
    
    var date = (currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear();
    
    // if minutes are less than 10, add 0 to front to fix the format
    if(currentTime.getMinutes() < 10){
        var min = "0" + currentTime.getMinutes();
    }
    var time = currentTime.getHours() + ":" + min;
    
    return time, date;
}

var perString = "";
var comString = "";

app.post('/ihop/email', function(req, res){
    var perString;
    var comString;
    console.log(req.body);
    var communityCheckList = req.body.community;
    var personalCheckList = req.body.personal;
    var userName = req.body.username;
    var userEmail = req.body.email;
    var time, date = getTimeAndDate();
    
    /* FIND COMMUNITY TODOS in DB */
    Todo.find({type: "community"}, function(err, todos){
        if(err){
            console.log(err);
        } else {
           console.log("Number of Community Todos: " + todos.length);
            if (communityCheckList.length == todos.length){
                // All Community Items are Checked
                comString = "All items checked off";
                console.log(comString);
                
            } else {
                // NOT ALL COMMUNITY ITEMS CHECKED
                comString = communityCheckList.length + " out of " + todos.length + " checked as complete";
                console.log(comString);
            }
        }
    });
    
    /* FIND PERSONAL TODOS in DB */
    Todo.find({type: "personal"}, function(err, todos){
        if(err){
            console.log(err);
        } else {
            console.log("Number of Personal Todos: " + todos.length);
            if(personalCheckList.length == todos.length){
                // ALL personal items are checked
                perString = "All items checked off as completed";
                console.log(perString);
                
            } else {
                // NOT ALL PERSONAL ITEMS CHECKED
                perString = personalCheckList.length + " out of " + todos.length + " checked as complete";
                console.log(perString);
            }
        }
    });
    
    var emailBody = "<!DOCTYPE html><html><head><style>hr {padding-top: 0;float: left;display: block;width: 18em;}h2 {color: #26ABBC; margin-bottom: 0;}a {text-decoration: none;}</style></head><body><div class='main'><p id='timestamp'>Submitted by: <strong>" + userName + "</strong><br />Date Submitted: " + date + "<br /> Time Submitted:" + time + "</p><h2>Community Living:</h2><hr /><br /><p>" + comString + "</p><p><i>Comments:</i></p><h2>Personal Living Space:</h2><hr /><br /><p>" + perString + "</p><p><i>Comments:</i></p><br /><a href='http://www.google.com' target='_blank'>Write Review</a></div></body></html>";
    
    var message	= {
       text:	emailBody, 
       from:	userName + "<" + userEmail + ">", 
       to:		"Devin Riegle <riegledevin@gmail.com>",
       subject:	"Deep Clean CheckList (" + userName + ")",
       attachment: 
       [
          {data: emailBody, alternative:true}
       ]
    };

    server.send(message, function(err, message) {
        if(err){
            console.log(err);
            res.send("Message not sent<br>" + err);
        } else {
            res.send("Message sent successfully!");
        }
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Devin's Portfolio webserver started successfully!");
    console.log(currentTime.toString());
});