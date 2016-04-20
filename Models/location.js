/**
 * Created by seisan on 4/10/16.
 */

'use strict';

var bookshelf = require('../bookshelf.js');

var Stay = require('./stay');



var Location  = bookshelf.Model.extend({
    tableName:'location',
    idAttribute:'locationId',
    hasTimestamps: false,

    stay:function() {
        return this.hasMany(Stay);
    },


});


module.exports = bookshelf.model('Location', Location);