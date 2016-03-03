/**
 * Created by MichaelLeffert on 2/11/16.
 */
'use strict';

var bookshelf = require('../bookshelf.js');

var Job = require('./jobs');

var Employee  = bookshelf.Model.extend({
    tableName:'employees',
    idAttribute:'empId',
    hasTimestamps: false,

    jobs:function() {
        return this.belongsTo(Job, 'jobId');
    }


});


module.exports = bookshelf.model('Emplyoee', Employee);