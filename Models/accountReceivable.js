/**
 * Created by seisan on 4/9/16.
 */

'use strict';

var bookshelf = require('../bookshelf.js');

var DirectBill = require('./directBillPayment');
var Company = require('./company');

var AccountReceivable  = bookshelf.Model.extend({
    tableName:'accountsReceivable',
    idAttribute:'arAccountNumber',
    hasTimestamps: false,

    directBill:function() {
        return this.hasMany(DirectBill);
    },
    company:function(){
        return this.belongsTo(Company, 'compId');
    }


});


module.exports = bookshelf.model('AccountReceivable', AccountReceivable);