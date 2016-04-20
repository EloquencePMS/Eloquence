

var Company = require('../Models/company');
var express           = require('express'),
    companyController   = express.Router();
var bookshelf = require('../bookshelf.js');
var check = require('./checkToken');



var companyCollection = bookshelf.Collection.extend({
    model:Company
});

companyController
    .route('/:id')
    .get(check, function(req, res, next){
        Company.query({where: {companyId: req.params.id}})
            .fetch({withRelated: ['rate', 'taxProfile', 'taxProfile.taxRate', 'guest']})
            .then(function(company){
                res.send(company.toJSON());
            });

    })
    .put(check, function( req, res, next){
        Company.forge({companyId: req.params.id})
            .fetch({require: true})
            .then(function(company){
                company.save({

                    companyName: req.body.companyName       || company.get('companyName'    ),
                    pointOfContact: req.body.pointOfContact || company.get('pointOfContact' ),
                    phoneNum: req.body.phoneNum             || company.get('phoneNum'       ),
                    email: req.body.email                   || company.get('email'          ),
                    street: req.body.street                 || company.get('street'         ),
                    city: req.body.city                     || company.get('city'           ),
                    state: req.body.state                   || company.get('state'          ),
                    zipcode: req.body.zipcode               || company.get('zipcode'        ),
                    taxId: req.body.taxId                   || company.get('taxId'          ),
                    rateId: req.body.rateId                 || company.get('rateId'         )

                }).then(function(company){
                    res.send(company.toJSON());
                })
            });
    })
    .delete(check, function(req, res, next){
        new Company({companyId: req.params.id})
            .destroy()
            .then(function(company){
                res.status(200).json({message: 'success'});

            }).catch(function (err){
            res.status(500).json({message: err.message});
        });

    });

companyController
    .route('/')
    .get(check, function(req, res, next){
        companyCollection.forge().fetch({withRelated: ['rate', 'taxProfile', 'taxProfile.taxRate']})
            .then(function(company){
                res.send(company.toJSON());
            })

    })
    .post(check, function(req, res, next){
        Company.forge({
        }).save({companyName: req.body.companyName, pointOfContact: req.body.pointOfContact, phoneNum: req.body.phoneNum, street: req.body.street, city: req.body.city, state: req.body.state, zipcode: req.body.zipcode, taxId: req.body.taxId, rateId: req.body.rateId, email: req.body.email}, {require: true}, {method: "insert"} )
            .then(function (company){
                res.json(company.toJSON());
            })


    });





module.exports = companyController;