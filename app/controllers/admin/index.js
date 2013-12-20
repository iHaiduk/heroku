/**
 * Created by HIV on 18.12.13.
 */

function AdminController(res){
    this.res = res;
    this.db = null;
    this.viewDir = "admin";
    this.User = null;
}

var Controller = require('../Controller' );
AdminController.prototype = new Controller();

AdminController.prototype.actionIndex = function(){
    var _th = this;
    //if( this.db != null ){


    var mongoose = require('mongoose');
    mongoose.connection.close();
    mongoose.connect('mongodb://ncast:9322022@ds039487.mongolab.com:39487/ncast');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {

        var model = null;
        var menus = mongoose.Schema(
            // type data
            {
                _id: String,
                name: String,
                link: String,
                position: Number,
                child: Object,
                icon: String
            },
            // name table
            { collection: 'admin_menu' }
        );

        try {
            if (mongoose.model('admin_menu')){
                model = mongoose.model('admin_menu');
            }
        } catch(e) {
            if (e.name === 'MissingSchemaError') {
                model = mongoose.model('admin_menu', menus);
            }
        }

        model.find({}, function (err, menus) {
            _th.render('index', { title: 'MySite', menus: menus });
            mongoose.connection.close();
        });
    });



    //} else { console.error('Db conection field'); }

    //this.render('index', { title: 'MySite', style: [] });
};

module.exports = AdminController;