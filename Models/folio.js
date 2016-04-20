/**
 * Created by seisan on 4/9/16.
 */

'use strict';

var bookshelf = require('../bookshelf.js');

var Stay = require('./stay');
var Payment = require('./payment');
var Charge = require('./charge');


var Folio  = bookshelf.Model.extend({
    tableName:'folio',
    idAttribute:'folioId',
    hasTimestamps: false,

    stay:function() {
        return this.hasOne(Stay);
    },
    payment:function(){
        return this.hasMany(Payment);
    },
    charge:function(){
        return this.hasMany(Charge);
    }


});


module.exports = bookshelf.model('Folio', Folio);