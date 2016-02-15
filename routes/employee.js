/**
 * Created by MichaelLeffert on 2/11/16.
 */
var Employee = require('../Models/employees');
var express           = require('express'),
    employeeController   = express.Router();


employeeController
    .route('/')
    .get(function(req, res, next){
        Employee.query({where: {id: req.query.id}})
            .fetch({withRelated: ['jobs'], require: true})
        .then(function(employee){
            res.send(employee.toJSON());
        })

    })

employeeController
    .route('/:id')
    .get(function(req, res, next){
        Employee.query({where: {id: req.query.id}})
            .fetch({withRelated: ['jobs'], require: true})
            .then(function(employee){
                res.send(employee.toJSON());
            })

    })
module.exports = employeeController;