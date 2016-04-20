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

module.exports = bookshelf.model('User', User);