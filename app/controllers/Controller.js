
function Controller ( res ){

    this.res = res;
    this.layout = "layout";

}

Controller.prototype.render = function( view, data ){
    data.layout = this.layout;
    this.res.render(this.viewDir+'/'+view, data)
};

Controller.prototype.actionError = function (  ){
    this.res.end("404");
};

module.exports = Controller;