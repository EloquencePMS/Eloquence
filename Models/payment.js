/**
 * Created by seisan on 4/9/16.
 */

'use strict';

var bookshelf = require('../bookshelf.js');

var Folio = require('./folio');
var CC = require('./ccPayment');
var Cash = require('./cashPayment');
var Check = require('./checkPayment');
var DirectBill = require('./directBillPayment');

var Payment  = bookshelf.Model.extend({
    tableName:'payment',
    idAttribute:'paymentId',
    hasTimestamps: false,

    folio:function() {
        return this.belongsTo(Folio, 'folioId');
    },
    cc:function(){
        return this.hasOne(CC, 'ccId');
    },
    cash:function(){
        return this.hasOne(Cash, 'cashId');
    },
    check:function(){
        return this.hasOne(Check, 'checkId');
    },
    directBill:function(){
        return this.hasOne(DirectBill, 'directBillId')
    }




});


module.exports = bookshelf.model('Payment', Payment);