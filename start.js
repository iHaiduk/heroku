var http = require('http');
var express = require('express');
var path = require('path');
var app = express();

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

// Route
app.get('/', function(req, res){
    var controller = require("./controllers");
    res.end("Hello!");
});




// End Route
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.listen(app.get('port'));
console.log('Зайди на страницу для загрузки данных http://127.0.0.1:' + app.get('port')+'/');