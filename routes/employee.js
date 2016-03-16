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
            });

    })
    .put(function(req, res, next){
    Employee.forge({empId: req.params.id})
        .fetch({require: true})
        .then(function(employee){
            employee.save({
                fName: req.body.fName || employee.get('fName'),
                lName: req.body.lName || employee.get('lName'),
                street: req.body.street || employee.get('street'),
                city: req.body.city || employee.get('city'),
                state: req.body.state || employee.get('state'),
                zip: req.body.zip || employee.get('zip'),
                phone: req.body.phone || employee.get('phone'),
                email: req.body.email || employee.get('email'),
                jobId: req.body.jobId || employee.get('jobId'),
                hourlyWage: req.body.hourlyWage || employee.get('hourlyWage'),
                salary: req.body.salary || employee.get('salary')
            }).then(function(employee){
                res.send(employee.toJSON());
            })
        });
        })
    .delete(function(req, res, next){
        new Employee({empId: req.params.id})
             .destroy()
             .then(function(employee){
                 res.status(200).json({message: 'success'});

             }).catch(function (err){
                res.status(500).json({message: err.message});
        });

});

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