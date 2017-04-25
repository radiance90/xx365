// modules ****************************//
var express      = require('express');
var app          = express();
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');

// configuration **********************//
// db config
var db = require('./config/db');
// port config
var port = process.env.PORT || 8080;
// db connection
mongoose.connect(db.url);
// log every request to the console
app.use(morgan('dev')); 
// passport config
require('./config/passport')(passport);


// set up express app ********************//
// parse application/json 
app.use(bodyParser.json()); 
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 
//set the static files location
app.use(express.static(__dirname + 'public'));


// required for passport *********************//
app.use(session({ secret: 'myonlineretailshop' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//routes *******************************//
//configure routes
require('./app/routes')(app, passport);


//start app ****************************//
app.listen(port);
console.log("server listening on port " + port);

// export
exports = modules.exports = app;