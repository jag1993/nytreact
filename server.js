var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cheerio = require('cheerio');
var request = require('request');



var app = express();

app.use(express.static(process.cwd() + '/public'));


mongoose.connect('mongodb://localhost/articles');
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

var exphbs = require('express-handlebars');
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');


var routes = require('./controllers/cats_controller.js');
app.use('/', routes);

var port = 3000;
app.listen(port);
