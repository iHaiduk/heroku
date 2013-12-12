/**
 * Created by HIV on 12.12.13.
 */
var db = require("../db");
var users = db.Schema({
    _id:  String,
    user: String,
    pwd:   String,
    readOnly: Boolean
});
var User = db.model("system.users", users);
module.exports = User;