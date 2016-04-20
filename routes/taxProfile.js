
/**
 * Created by seisan on 4/11/16.
 */
var TaxProfile = require('../Models/taxProfile');
var express           = require('express'),
    taxProfileController   = express.Router();
var bookshelf = require('../bookshelf.js');
var check = require('./checkToken');


var taxProfileCollection = bookshelf.Collection.extend({
    model:TaxProfile
});

taxProfileController
    .route('/:id')
    .get(check, function(req, res, next){
        TaxProfile.query({where: {taxId: req.params.id}})
            .fetch({withRelated: ['taxRate']}, {require:true})
            .then(function(taxprofile){
                if(taxprofile === null) {
                    res.status(204).json();
                }else{
                    res.send(taxprofile.toJSON());
                }
            });

    })
    .put(check, function( req, res, next){
        TaxProfile.forge({taxId: req.params.id})
            .fetch({require: true})
            .then(function(taxprofile){
                taxprofile.save({

                    taxRateId: req.body.taxRateId || taxprofile.get('taxRateId'),
                    state: req.body.state || taxprofile.get('state'),
                    county: req.body.county || taxprofile.get('county'),
                    occupancy: req.body.occupancy || taxprofile.get('occupancy')
                }).then(function(taxprofile){
                    res.send(taxprofile.toJSON());
                })
            });
    })
    .delete(check, function(req, res, next){
        new TaxProfile({taxId: req.params.id})
            .destroy()
            .then(function(taxprofile){
                res.status(200).json({message: 'success'});

            }).catch(function (err){
            res.status(500).json({message: err.message});
        });

    });

taxProfileController
    .route('/')
    .get(check, function(req, res, next){
        taxProfileCollection.forge().fetch({withRelated: ['taxRate']})
            .then(function(taxprofile){
                res.send(taxprofile.toJSON());
            })

    })
    .post(check, function(req, res, next){
        console.log(req.body);
        TaxProfile.forge({


        }).save({taxRateId: req.body.taxRateId, state: req.body.state, county: req.body.county, occupancy: req.body.occupancy}, {require: true}, {method: "insert"})
            .then(function (taxprofile){
                res.json(taxprofile.toJSON());
            })


    });





module.exports = taxProfileController;