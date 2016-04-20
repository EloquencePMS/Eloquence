/**
 * Created by seisan on 4/9/16.
 */
'use strict';

var bookshelf = require('../bookshelf.js');

var TaxProfile = require('./taxProfile');



var TaxRate  = bookshelf.Model.extend({
    tableName:'taxRate',
    idAttribute:'taxRateId',
    hasTimestamps: false,

    taxProfile:function() {
        return this.hasMany(TaxProfile, 'taxRateId');
    }

});


module.exports = bookshelf.model('TaxRate', TaxRate);