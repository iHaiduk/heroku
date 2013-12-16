
function SiteController(res){
    this.res = res;
    this.viewDir = "site";
}

var Controller = require('../Controller' );
SiteController.prototype = new Controller();

SiteController.prototype.actionIndex = function(){
    this.render('index', { title: 'Home', message: 'Home page, layout:' });
};

SiteController.prototype.actionAbout = function(){
    this.render('index', { title: 'About', message: 'About us, layout:' });
};

module.exports = SiteController;

