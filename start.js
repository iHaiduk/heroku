var http = require('http');
var express = require('express');
var path = require('path');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://ncast:9322022@ds039487.mongolab.com:39487/ncast');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("Connected");
});
app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function(req, res){
    res.end("Hello world! 123 456");
});

if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.listen(app.get('port'));
console.log('Express server listening on port http://127.0.0.1:' + app.get('port')+'/');