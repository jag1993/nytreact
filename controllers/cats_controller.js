var express = require('express');
var router = express.Router();
var Articles = require('../models/articles.js');
var cheerio = require('cheerio');
var request = require('request');


router.get('/', function(req, res) {
    Articles.find({}, function(err, doc) {
        if (err) {
            console.log(err);
        } else {
            console.log(doc);
            res.render('index', { 'articles': doc });
        }
    });
});


router.get('/scrape', function(req, res) {
    request('https://www.nytimes.com/', function(error, response, html) {
        var $ = cheerio.load(html);
        $('.megaSPanC .theme-summary').each(function(i, element) {
            var result = {};
            result.title = $(this).find('h2').text();
            result.summary = $(this).find('.summary').text();
            var entry = new Articles(result);
            entry.save(function(err, doc) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(doc);
                }

            });
        });
        res.send("Scrape Complete");
    });
});



module.exports = router;
