
'use strict';

var bookshelf = require('../bookshelf.js');

var RoomNumber = require('./roomNumber');

var HousekeepingStatus  = bookshelf.Model.extend({
    tableName:'houseKeepingStatus',
    idAttribute:'houseKeepingStatusId',

    hasTimestamps: false,

   


    roomNumber:function(){
        return this.belongsTo(RoomNumber, 'roomNumber');
    }




});

module.exports = bookshelf.model('HousekeepingStatus', HousekeepingStatus);