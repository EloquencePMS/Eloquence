
'use strict';

var bookshelf = require('../bookshelf.js');

var Stay = require('./stay');



var Market  = bookshelf.Model.extend({
    tableName:'market',
    idAttribute:'marketId',
    hasTimestamps: false,

    stay:function() {
        return this.hasMany(Stay);
    },


});


module.exports = bookshelf.model('Market', Market);