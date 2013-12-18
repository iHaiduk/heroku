var clients = [];

function ChatController(res){
    this.res = res;
    this.viewDir = "chat";
    this.msg = "";
    console.log("New controller: ChatController");
}

var Controller = require('../Controller' );
ChatController.prototype = new Controller();

ChatController.prototype.actionIndex = function(){
    this.render('index', { title: 'Chat', message: 'Home page, layout:' });
};

ChatController.prototype.actionSend = function( params, req ){
    var message = "", responce = this.res;
    req.on('readable', function(){
        message += req.read();
    }).on('end', function(){
            var msg = JSON.parse(message);
            console.log(msg);
            clients.forEach(function( res ){
                res.end(msg.message);
            });
            clients = [];
            responce.end("");
    });

};

ChatController.prototype.sendMsg = function( ){
    var msg = JSON.parse(message);
    console.log(msg);
    console.log("Send to clients: "+clients.length);
    /*clients.forEach(function( res ){
        res.end(message);
    });
    clients = [];
    message = "";*/

};


function sendMsg(res){
    //console.log(res);

    res.send("OK");
    /*var message = JSON.parse(msg);
     console.log(msg);
     console.log("Send to clients: "+clients.length);
     clients.forEach(function( res ){
     res.end(message);
     });
     clients = [];
     message = "";*/
   // res.end("ok");
}

ChatController.prototype.actionSubscribe = function(){
    //this.render('index', { title: 'Chat', message: 'Home page, layout:' });

    clients.push( this.res );
    //this.res.on('close', clearClients(this.res) );
    console.log( "Subscribe: " + clients.length );
    var responce = this.res;
    responce.on("close", function(){
        clients.splice( clients.indexOf(responce), 1 );
        console.log( "Subscribe: " + clients.length );
    });
};

module.exports = ChatController;