/**
 * Created by MichaelLeffert on 3/1/16.
 */
'use strict';

var bookshelf = require('../bookshelf.js');

var Job = require('./jobs');

var Department  = bookshelf.Model.extend({
    tableName:'departments',
    idAttribute:'depId',
    hasTimestamps: false,

    jobs:function() {
        return this.hasMany(Job, 'jobId');
    }


});


module.exports = bookshelf.model('Department', Department);