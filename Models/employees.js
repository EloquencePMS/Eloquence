/**
 * Created by MichaelLeffert on 2/11/16.
 */
'use strict';

var bookshelf = require('../bookshelf.js');
var bcrypt = require('bcrypt-nodejs');

var Job = require('./jobs');

var Employee  = bookshelf.Model.extend({
    tableName:'employees',
    idAttribute:'empId',
    hasTimestamps: false,

    jobs:function() {
        return this.belongsTo(Job, 'jobId');
    },

    hashPassword: function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync());
    },
    validatePassword: function (password){
    return bcrypt.compareSync(password, this.local.password);
}



});


module.exports = bookshelf.model('Emplyoee', Employee);