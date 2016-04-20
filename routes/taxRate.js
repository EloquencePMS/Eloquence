/**
 * Created by seisan on 4/11/16.
 */
var TaxRate = require('../Models/taxRate');
var express           = require('express'),
    taxRateController   = express.Router();
var bookshelf = require('../bookshelf.js');
var check = require('./checkToken');


var taxRateCollection = bookshelf.Collection.extend({
    model:TaxRate
});





taxRateController
    .route('/:id')
    .get(check, function(req, res, next){
        taxRateCollection.query({where: {taxRateId: req.params.id}})
            .fetch()
            .then(function(taxrate){
                res.send(taxrate.toJSON());
            });

    })
    .put(check, function( req, res, next){
        TaxRate.forge({taxRateId: req.params.id})
            .fetch({require: true})
            .then(function(taxrate){
                taxrate.save({
                    state: req.body.state || taxrate.get('state'),
                    county: req.body.county || taxrate.get('county'),
                    occupancy: req.body.occupancy || taxrate.get('occupancy')

                }).then(function(taxrate){
                    res.send(taxrate.toJSON());
                })
            });
    })
    .delete(check, function(req, res, next){
        new TaxRate({taxRateId: req.params.id})
            .destroy()
            .then(function(taxrate){
                res.status(200).json({message: 'success'});

            }).catch(function (err){
            res.status(500).json({message: err.message});
        });

    });

taxRateController
    .route('/')
    .get(check, function(req, res, next){
        taxRateCollection.forge().fetch()
            .then(function(taxrate){
                res.send(taxrate.toJSON());
            })

    })
    .post(check, function(req, res, next){
        TaxRate.forge({

            state: req.body.state ,
            county: req.body.county ,
            occupancy: req.body.occupancy
        }).save()
            .then(function (taxrate){
                res.json(taxrate.toJSON());
            })


    });





module.exports = taxRateController;