/**
 * Created by seisan on 4/9/16.
 */

'use strict';

var bookshelf = require('../bookshelf.js');

var Charge = require('./charge');


var ChargeType  = bookshelf.Model.extend({
    tableName:'chargeType',
    idAttribute:'chargeTypeId',
    hasTimestamps: false,

    charge:function() {
        return this.hasMany(Charge, 'chargeTypeId');
    }


});


module.exports = bookshelf.model('ChargeType', ChargeType);
