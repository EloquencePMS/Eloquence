/**
 * Created by MichaelLeffert on 2/11/16.
 */
'use strict';

var bookshelf = require('../bookshelf.js');

var Job = require('./jobs');
var User = require('./users');
var HousekeepingAssignment = require('./housekeepingAssignment');
var Stay = require('./stay');

var Employee  = bookshelf.Model.extend({
    tableName:'employees',
    idAttribute:'empId',
    hasTimestamps: false,

    jobs:function() {
        return this.belongsTo(Job, 'jobId');
    },
    housekeepingAssignment:function() {
        return this.hasMany(HousekeepingAssignment);
    },
    user:function () {
        return this.hasOne(User);
    },
    stay:function(){
        return this.hasMany(Stay);
    },
   




});


module.exports = bookshelf.model('Emplyoee', Employee);