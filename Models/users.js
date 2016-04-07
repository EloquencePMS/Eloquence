/**
 * Created by seisan on 3/28/16.
 */
'use strict';

var bookshelf = require('../bookshelf.js');

var Employee = require('./employees');



var User  = bookshelf.Model.extend({
    tableName:'user',
    idAttribute:'userId',
    hasTimestamps: false,



    employee:function() {
        return this.belongsTo(Employee, 'empId');
    },


    
});
// User.methods.setPassword = function (password){
//     var salt = bcrypt.genSaltSync( 1024 );
//     return bcrypt.hashSync( password, salt );
// }
// User.methods.isPasswordValid = function (password) {
//     if(!this.password){
//         return false;
//     }else{
//         return bcrypt.compareSync(password, this.password);
//     }
//
// }
module.exports = bookshelf.model('User', User);