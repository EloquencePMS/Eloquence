/**
 * Created by seisan on 4/10/16.
 */
'use strict';

var bookshelf = require('../bookshelf.js');

var Stay = require('./stay');
var RoomType = require('./roomType');
var HousekeepingStatus = require('./housekeepingStatus');
var HousekeepingAssignment = require('./housekeepingAssignment');


var RoomNumber  = bookshelf.Model.extend({
    tableName:'roomNumbers',
    idAttribute:'roomNumber',
    hasTimestamps: false,

    stay:function() {
        return this.hasMany(Stay);
    },
    housekeepingAssignment:function() {
        return this.hasMany(HousekeepingAssignment);
    },
    roomType:function(){
        return this.belongsTo(RoomType, 'roomType');
    },
    housekeepingStatus:function(){
        return this.belongsTo(HousekeepingStatus, 'houseKeepingStatusId');
    }

});


module.exports = bookshelf.model('RoomNumber', RoomNumber);