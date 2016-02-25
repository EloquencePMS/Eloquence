/**
 * Created by MichaelLeffert on 2/11/16.
 */
'use strict';

var bookshelf = require('../bookshelf.js');

require('./employees.js');

var Job  = bookshelf.Model.extend({
    tableName:'Job',
    hasTimestamps: false,

    employees:function() {
        return this.hasMany('Emplpoyee');
    }




});

module.exports = bookshelf.model('Job', Job);