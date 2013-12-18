var app = require(__dirname + '/app'),
    port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('View site on http://127.0.0.1:'+port, port);
});