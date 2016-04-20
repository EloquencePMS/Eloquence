
'use strict';

var bookshelf = require('../bookshelf.js');

var Payment = require('./payment');


var Check  = bookshelf.Model.extend({
    tableName: 'check',
    idAttribute: 'checkId',
    hasTimestamps: false,

    payment: function () {
        return this.belongsTo(Payment, 'checkId');
    }
});

module.exports = bookshelf.model('Check', Check);