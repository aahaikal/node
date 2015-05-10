var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
var port = process.env.PORT || 9000;

bookRouter = require("./routes/bookRouters")(Book);


app.use('/api/books', bookRouter);

app.get('/', function(req, res) {
    res.send('<h1>welcome to my API</h1><h2> something</h2>');
});

app.listen(port, function() {
    console.log('Running on port: ' + port)
});
