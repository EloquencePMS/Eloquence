/**
 * Created by seisan on 5/5/16.
 */
var Market = require('../Models/market');
var express           = require('express'),
    marketController   = express.Router();
var bookshelf = require('../bookshelf.js');
var check = require('./checkToken');


var marketCollection = bookshelf.Collection.extend({
    model:Market
});





marketController
    .route('/:id')
    .get(check, function(req, res, next){
        marketCollection.query({where: {marketId: req.params.id}})
            .fetch()
            .then(function(market){
                res.send(market.toJSON());
            });

    })
    .put(check, function( req, res, next){
        Market.forge({marketId: req.params.id})
            .fetch({require: true})
            .then(function(market){
                market.save({

                    title: req.body.title || market.get('title'),

                    description: req.body.description || market.get('description')

                }).then(function(market){
                    res.send(market.toJSON());
                })
            });
    })
    .delete(check, function(req, res, next){
        new Market({marketId: req.params.id})
            .destroy()
            .then(function(market){
                res.status(200).json({message: 'success'});

            }).catch(function (err){
            res.status(500).json({message: err.message});
        });

    });

marketController
    .route('/')
    .get(check, function(req, res, next){
        marketCollection.forge().fetch()
            .then(function(market){
                res.send(market.toJSON());
            })

    })
    .post(check, function(req, res, next){
        Market.forge({
        }).save({title: req.body.title, description: req.body.description}, {require: true}, {method: "insert"} )
            .then(function (market){
                res.json(market.toJSON());
            })


    });





module.exports = marketController;