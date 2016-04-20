/**
 * Created by seisan on 4/10/16.
 */
/**
 * Created by seisan on 4/10/16.
 */
'use strict';

var bookshelf = require('../bookshelf.js');

var Employee = require('./employees');
var Folio = require('./folio');
var Guest = require('./guest');
var Location = require('./location' );
var Market = require('./market');
var Rate = require('./rate');
var RoomNumber = require('./roomNumber');
var RoomType = require('./roomType');
var TaxProfile = require('./taxProfile');


var Stay  = bookshelf.Model.extend({
    tableName:'stay',
    idAttribute:'stayId',

    hasTimestamps: false,

    employees:function() {
        return this.belongsTo('Employee', 'empId');
    },
    roomNumber:function(){
        return this.belongsTo('RoomNumber', 'roomNumber');
    },
    folio:function(){
        return this.belongsTo('Folio', 'folioId');
    },
    guest:function(){
        return this.belongsTo('Guest','guestId');
    },
    location:function(){
        return this.belongsTo('Location', 'locationId');
    },
    market:function () {
        return this.belongsTo('Market', 'marketId');
    },
    rate:function () {
        return this.belongsTo('Rate', 'rateId');
    },
    roomType:function(){
        return this.belongsTo('RoomType', 'roomType')
    },
    taxProfile:function(){
        return this.belongsTo('TaxProfile', 'taxProfile');
    },



});

module.exports = bookshelf.model('Stay', Stay);