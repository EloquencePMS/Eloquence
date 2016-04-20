/**
 * Created by MichaelLeffert on 2/11/16.
 */
'use strict';

var bookshelf = require('../bookshelf.js');

var Employee = require('./employees.js');
var Department = require('./departments.js');

var Job  = bookshelf.Model.extend({
    tableName:'jobs',
    idAttribute:'jobId',

    hasTimestamps: false,

    employees:function() {
        return this.hasMany(Employee);
    },


    departments:function(){
        return this.belongsTo(Department, 'departmentId');
    }




});

module.exports = bookshelf.model('Job', Job);