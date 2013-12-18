var express = require('express'),
    engine = require('../'),
    app = express(),
    router = require(__dirname + '/router');

// configuration settings  :
app.engine('ejs', engine);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

/*app.get('/',function(req,res,next){
    res.render('site/index', { title: 'test', message: 'body' } );
});*/

app.get(/(.*)/, router.route );
app.post(/(.*)/, router.route );

module.exports = app;