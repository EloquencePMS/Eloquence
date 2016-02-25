/**
 * Created by MichaelLeffert on 2/11/16.
 */
var Employee = require('../Models/employees');
var express           = require('express'),
    employeeController   = express.Router();
var bookshelf = require('../bookshelf.js');

var employeeCollection = bookshelf.Collection.extend({
    model:Employee
});

employeeController
    .route('/:id')
    .get(function(req, res, next){
        employeeCollection.query({where: {id: req.params.id}})
            .fetchOne()
            .then(function(employee){
                res.send(employee.toJSON());
            })

    })


employeeController
    .route('/')
    .get(function(req, res, next){
        employeeCollection.forge().fetch()
            .then(function(employee){
                res.send(employee.toJSON());
            })

    })
module.exports = employeeController;