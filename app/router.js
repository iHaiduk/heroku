exports.route = function(reg, res){

    var route = reg.params[0].split("/");


    if( route[1] ){
        var controller = require(__dirname + '/controllers/' + route[1] );
        var cc = new controller(res);
        cc[  "action" + route[2][0].toUpperCase() + route[2].substr(1).toLowerCase() ](reg, res);
    } else {
        var Controller = require(__dirname + '/controllers/Controller' );
        var CMain = new Controller(res);
        CMain.actionError();
    }


};