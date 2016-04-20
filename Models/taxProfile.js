/**
 * Created by seisan on 4/9/16.
 */
'use strict';

var bookshelf = require('../bookshelf.js');

var TaxRate = require('./taxRate');

var Company = require('./company');

var Stay = require('./stay');


var TaxProfile  = bookshelf.Model.extend({
    tableName:'taxProfile',
    idAttribute:'taxId',
    hasTimestamps: false,

    taxRate:function() {
        return this.belongsTo(TaxRate, 'taxRateId');
    },
    company:function(){
        return this.hasMany(Company);
        
    },
    stay:function(){
        return this.hasMany(Stay);
    }

});


module.exports = bookshelf.model('TaxProfile', TaxProfile);