
'use strict';

var bookshelf = require('../bookshelf.js');

var Payment = require('./payment');

var AR = require('./accountReceivable');


var DirectBill  = bookshelf.Model.extend({
    tableName:'directBill',
    idAttribute:'directBillId',
    hasTimestamps: false,

    payment:function() {
        return this.belongsTo(Payment, 'directBillId');
    },

    ar:function () {
        return this.belongsTo(AR, 'arAccountNumber');
    }


});


module.exports = bookshelf.model('DirectBill', DirectBill);
