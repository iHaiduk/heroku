
function Controller ( res ){

    this.res = res;
}

Controller.prototype.render = function( view, data ){
    this.res.render(this.viewDir+'/'+view, data)
};

Controller.prototype.actionIndex = function (  ){
    this.res.end("Main controller");
};


Controller.prototype.actionError = function ( error_code ){
    this.res.statusCode = !isNaN(error_code) ? error_code : 404 ;
    console.log("Controller->actoinError("+error_code+")");
    this.res.end("404");
};

module.exports = Controller;