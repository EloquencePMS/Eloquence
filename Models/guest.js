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


var Guest  = bookshelf.Model.extend({
    tableName:'guest',
    idAttribute:'guestId',
    hasTimestamps: false,

    stay:function() {
        return this.hasMany(Stay);
    },
    comp:function(){
        return this.belongsTo('Company', 'compId');
    }

});


module.exports = bookshelf.model('Guest', Guest);