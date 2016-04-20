/**
 * Created by seisan on 4/10/16.
 */
/**
 * Created by seisan on 4/9/16.
 */
'use strict';

var bookshelf = require('../bookshelf.js');

var Stay = require('./stay');
var RoomNumber = require('./roomNumber');



var RoomType  = bookshelf.Model.extend({
    tableName:'roomType',
    idAttribute:'roomType',
    hasTimestamps: false,

    stay:function() {
        return this.hasMany(Stay);
    },
    roomNumber:function(){
        return this.hasMany(RoomNumber)
    }

});


module.exports = bookshelf.model('RoomType', RoomType);