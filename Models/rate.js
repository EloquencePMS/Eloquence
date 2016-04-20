/**
 * Created by seisan on 4/10/16.
 */
/**
 * Created by seisan on 4/9/16.
 */
'use strict';

var bookshelf = require('../bookshelf.js');

var Stay = require('./stay');
var Company = require('./company');


var Rate  = bookshelf.Model.extend({
    tableName:'rate',
    idAttribute:'rateId',
    hasTimestamps: false,

    company:function() {
        return this.hasMany(Company);
    },
    stay:function () {
        return this.hasMany(Stay);
    }

});


module.exports = bookshelf.model('Rate', Rate);