/**
 * Created by HIV on 18.12.13.
 */

function AdminController(res){
    this.res = res;
    this.viewDir = "admin";
}

var Controller = require('../Controller' );
AdminController.prototype = new Controller();

AdminController.prototype.actionIndex = function(){
    this.render('index', { title: 'MySite', style: [] });
};

module.exports = AdminController;