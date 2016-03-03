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
        employeeCollection.query({where: {empId: req.params.id}})
            .fetch({withRelated: ['jobs', 'jobs.departments']})
            .then(function(employee){
                res.send(employee.toJSON());
            })

    })


employeeController
    .route('/')
    .get(function(req, res, next){
        employeeCollection.forge().fetch({withRelated:['jobs', 'jobs.departments']})
            .then(function(employee){
                res.send(employee.toJSON());
            })

    })
    .post(function(req, res, next){
        Employee.forge({

            fName: req.body.fName,
            lName: req.body.lName,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            phone: req.body.phone,
            email: req.body.email,
            jobId: req.body.jobId,
            hourlyWage: req.body.hourlyWage,
            salary: req.body.salary
        }).save()
            .then(function (employee){
                res.json(employee.toJSON());
            })


    });




module.exports = employeeController;