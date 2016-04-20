
'use strict';

var bookshelf = require('../bookshelf.js');

var Payment = require('./payment');


var CC  = bookshelf.Model.extend({
    tableName:'cc',
    idAttribute:'ccId',
    hasTimestamps: false,

    payment:function() {
        return this.belongsTo(Payment, 'ccId');
    }


});


module.exports = bookshelf.model('CC', CC);