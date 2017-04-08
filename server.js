var PORT = 5000 || process.env.PORT;
var express = require('express');
var DB = "mongodb://localhost:27017/angular2-query";
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var mainRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', mainRouter);
app.use('/api', apiRouter);
mongoose.connect(DB, function(err) {
    if (err)
        return err;
    else
        console.log('Connected to DB');
});
app.set('views', path.join(__dirname, 'client/views'))
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'client')));
app.listen(PORT, function() {
    console.log('running');
});