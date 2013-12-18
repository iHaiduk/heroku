exports.route = function(reg, res){

    var config = require('./config');

    var MainController = require(__dirname + '/controllers/Controller' );
    var CMain = new MainController(res);

    // is file request:
    if( reg.params[0].search(/\.[a-zA-Z]+/) != -1 ){
        var path = require("path");
        var filePath = "";
        try { filePath = decodeURIComponent(reg.params[0]); } catch(err){ CMain.actionError(400);  return; }
        if( ~filePath.indexOf('\0') ){ CMain.actionError(400);  return; }
        filePath = path.normalize( path.join(config.public, filePath) );

        var fs = require("fs");
        var stream = new fs.ReadStream(filePath);
        stream.pipe(res);
        stream.on("error", function(){ CMain.actionError(400);  return; });
        res.on("close", function(){ stream.destroy(); });

    } else {

        // Default:
        if( reg.params[0] == "" || reg.params[0] == "/" ){
            var controller = require(__dirname + '/controllers/' + config.defaultController );
            var cc = new controller(res);
            cc[  "action" + config.defaultAction[0].toUpperCase() + config.defaultAction.substr(1).toLowerCase() ](reg, res);
        }

        // TODO: URL Manager:
        var route = reg.params[0];
        for( var reg in config.router ){
            regular = reg.replace(/\//, "\\/");
            if( route.search( regular ) == 0 ){
                route = "/"+config.router[reg];
            }
        }

        route = route.split("/");

        if( route[1] ){
            try {
                var controller = require(__dirname + '/controllers/' + route[1] );
                var cc = new controller(res);
                if( route[2] ){
                    var method = "action" + route[2][0].toUpperCase() + route[2].substr(1).toLowerCase();
                    if( cc[method] ){
                        var count_props = 0, props = [];
                        for( var param in route  ){
                            count_props++;
                            if(count_props>=4){
                                props[count_props-4] = route[param];
                            }
                        }
                        cc[method](props);
                    } else {  CMain.actionError(); }
                } else { cc["actionIndex"](); }
                /////////////////////////
            } catch(err){
                CMain.actionError(404);
            }
        } else {
            var Controller = require(__dirname + '/controllers/Controller' );
            var CMain = new Controller(res);
            CMain.actionIndex();
        }
    }

};