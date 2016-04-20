/**
 * Created by seisan on 4/10/16.
 */
'use strict';

var bookshelf = require('../bookshelf.js');

var Employee = require('./employees');
var RoomNumber = require('./roomNumber');

var HousekeepingAssignment  = bookshelf.Model.extend({
    tableName:'housekeepingAssignments',
    idAttribute:'HKAssignmentId',

    hasTimestamps: false,

    employees:function() {
        return this.belongsTo(Employee, 'empId');
    },


    roomNumber:function(){
        return this.belongsTo(RoomNumber, 'roomNumber');
    }




});

module.exports = bookshelf.model('HousekeepingAssignment', HousekeepingAssignment);