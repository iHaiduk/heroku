/**
 * Created by HIV on 12.12.13.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://ncast:9322022@ds039487.mongolab.com:39487/ncast');
function DB(){
    return mongoose;
}
module.exports = DB();