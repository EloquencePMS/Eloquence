/**
 * Created by MichaelLeffert on 2/25/16.
 */
var bookshelf = require('../bookshelf.js')

var Employee = require('../Models/employees')

var employeeCollection = bookshelf.Collection.extend({
    model:Employee
});

moduleExports = employeeCollection