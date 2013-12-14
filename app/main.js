var express = require('express')
    , ejsLocals = require('ejs-locals')
    , app = express()
    , router = require(__dirname + '/router');

// configuration settings
app.engine('ejs', ejsLocals)
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))



    app.get(/(.*)/, router.route );

module.exports = app;