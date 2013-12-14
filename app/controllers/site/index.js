
function SiteController(res){
    this.res = res;
    this.viewDir = "site"; // /viewa/site - вьюхи данного контроллера
    this.layout = "site/layout";
}

var Controller = require('../Controller' );
SiteController.prototype = new Controller();

SiteController.prototype.actionIndex = function(req, res){
    this.render('index', { title: 'Home', message: 'Home page, layout:' });
};

SiteController.prototype.actionAbout = function(){

    this.render('index', { title: 'About', message: 'About us, layout:' });

};

//
//var MainController = new Controller();

//util.inherits(SiteController, MainController);

module.exports = SiteController;

/*
exports.index = function (req, res) {

    res.render('site/index', {
        title: 'Home page',
        message: 'This is index page'
    });

};*/
