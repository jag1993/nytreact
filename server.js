var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cheerio = require('cheerio');
var request = require('request');



var app = express();

app.set('port', (process.env.PORT || 7015));
app.use(express.static(process.cwd() + '/public'));


mongoose.connect('mongodb://heroku_h5r8hczg:4ceote6j4h2i43u6df8rsc5agq@ds151707.mlab.com:51707/heroku_h5r8hczg');
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});


app.use(bodyParser.urlencoded({
	extended: false
}));


app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');


var routes = require('./controllers/articles_controller.js');
app.use('/', routes);


