/**
 * Created by seisan on 4/11/16.
 */
/**
 * Created by MichaelLeffert on 2/11/16.
 */
var Rate = require('../Models/rate');
var express           = require('express'),
    rateController   = express.Router();
var bookshelf = require('../bookshelf.js');
var check = require('./checkToken');


var rateCollection = bookshelf.Collection.extend({
    model:Rate
});





rateController
    .route('/:id')
    .get(check, function(req, res, next){
        rateCollection.query({where: {rateId: req.params.id}})
            .fetch()
            .then(function(rate){
                res.send(rate.toJSON());
            });

    })
    .put(check, function( req, res, next){
        Rate.forge({rateId: req.params.id})
            .fetch({require: true})
            .then(function(rate){
                rate.save({

                    name: req.body.name || rate.get('name'),
                    rate: req.body.rate || rate.get('rate'),
                    description: req.body.description || rate.get('description')

                }).then(function(rate){
                    res.send(rate.toJSON());
                })
            });
    })
    .delete(check, function(req, res, next){
        new Rate({rateId: req.params.id})
            .destroy()
            .then(function(rate){
                res.status(200).json({message: 'success'});

            }).catch(function (err){
            res.status(500).json({message: err.message});
        });

    });

rateController
    .route('/')
    .get(check, function(req, res, next){
        rateCollection.forge().fetch()
            .then(function(rate){
                res.send(rate.toJSON());
            })

    })
    .post(check, function(req, res, next){
        Rate.forge({
        }).save({name: req.body.name, rate: req.body.rate, description: req.body.description}, {require: true}, {method: "insert"} )
            .then(function (rate){
                res.json(rate.toJSON());
            })


    });





module.exports = rateController;