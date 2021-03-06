var express = require('express');
var app = express();
var routes = require('./routes/user');
var path = require('path');
var logger = require('morgan');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', routes);
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8000, function(req, res) {
    console.log('Server is running on port 8000...');
});
