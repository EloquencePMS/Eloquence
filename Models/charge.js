/**
 * Created by seisan on 4/9/16.
 */

'use strict';

var bookshelf = require('../bookshelf.js');

var ChargeType = require('./chargeType');
var Folio = require('./folio');


var Charge  = bookshelf.Model.extend({
    tableName:'charge',
    idAttribute:'chargeId',
    hasTimestamps: false,

    chargeType:function() {
        return this.belongsTo(ChargeType, 'chargeTypeId');
    },

    folio:function () {
        return this.hasOne(Folio, 'folioId');

    }


});


module.exports = bookshelf.model('Charge', Charge);
