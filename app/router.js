exports.route = function(reg, res){

    var config = require('./config');

    // Default:
    if( reg.params[0] == "" || reg.params[0] == "/" ){
        var controller = require(__dirname + '/controllers/' + config.defaultController );
        var cc = new controller(res);
        cc[  "action" + config.defaultAction[0].toUpperCase() + config.defaultAction.substr(1).toLowerCase() ](reg, res);
    }

    // TODO: URL Manager:
    var route = reg.params[0].split("/");
    if( route[1] ){
        var controller = require(__dirname + '/controllers/' + route[1] );

        if(controller){
            var cc = new controller(res);
            if( route[2] ){
                cc[  "action" + route[2][0].toUpperCase() + route[2].substr(1).toLowerCase() ](reg, res);
            } else {
                cc["actionIndex"](reg, res);
            }
        } else {
            var Controller = require(__dirname + '/controllers/Controller' );
            var CMain = new Controller(res);
            CMain.actionError();
        }
        /////////////////////////
    } else {
        var Controller = require(__dirname + '/controllers/Controller' );
        var CMain = new Controller(res);
        CMain.actionIndex();
    }


};