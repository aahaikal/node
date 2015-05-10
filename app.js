var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');
var app = express();

var port = process.env.PORT || 9000;

var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req, res) {
        Book.find(function(err, books) {
            if (err)
                console.log(err);
            else
                res.json(books);
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
