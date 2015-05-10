var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');
var app = express();

var port = process.env.PORT || 9000;

var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req, res) {

        var query = {};


        if (req.query.genre) {
            console.log(req);
            query.genre = req.query.genre;
        }

        Book.find(query, function(err, books) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(books);
            }

        });
    });

bookRouter.route('/Books/:bookId')
    .get(function(req, res) {

        Book.findById(req.params.bookId, function(err, book) {
            if (err) {
            	console.log(err);
                res.status(500).send(err);
            } else {
                res.json(book);
            }

        });
    });

bookRouter.route('/Apps')
    .get(function(req, res) {
        var response = {
            app1: {
                name: 'just an app',
                version: '1.2.3'
            },
            app2: {
                name: 'just an app 2',
                version: '0.0.1'
            }
        };
        res.json(response);
    });

app.use('/api', bookRouter);

app.get('/', function(req, res) {
    res.send('<h1>welcome to my API</h1><h2> something</h2>');
});

app.listen(port, function() {
    console.log('Running on port: ' + port)
});
