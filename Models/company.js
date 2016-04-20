/**
 * Created by seisan on 4/9/16.
 */
'use strict';

var bookshelf = require('../bookshelf.js');

var Rate = require('./rate');
var TaxProfile = require('./taxProfile');
var AR = require('./accountReceivable');
var Guest = require('./guest');

// var guestCollection = bookshelf.Collection.extend({
//     model:Guest
// });

var Company  = bookshelf.Model.extend({
    tableName:'company',
    idAttribute:'companyId',
    hasTimestamps: false,

    rate:function() {
        return this.belongsTo(Rate, 'rateId');
    },
    taxProfile:function(){
        return this.belongsTo(TaxProfile, 'taxId');
    },
    ar:function(){
        return this.hasOne(AR);
    },
    guest:function(){
        return this.hasMany(Guest, 'guestId');
    }
    
    


});


module.exports = bookshelf.model('Company', Company);