
'use strict';

var bookshelf = require('../bookshelf.js');

var Payment = require('./payment');


var Cash  = bookshelf.Model.extend({
    tableName:'cash',
    idAttribute:'cashId',
    hasTimestamps: false,

    payment:function() {
        return this.belongsTo(Payment, 'cashId');
    }


});


module.exports = bookshelf.model('Cash', Cash);