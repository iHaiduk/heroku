/**
 * Created by HIV on 13.12.13.
 */
var db = require("../db");
var connected = db.connection;
connected.on('error', console.error.bind(console, 'connection error:'));
connected.once('open', function () {
    var model = require("../models");

    model.findOne({}, '', function (err, usr) {

        console.log(usr);
        module.exports = usr;

    });
});