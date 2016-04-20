/**
 * Created by seisan on 4/11/16.
 */
/**
 * Created by seisan on 4/11/16.
 */
/**
 * Created by MichaelLeffert on 2/11/16.
 */
var HousekeepingStatus = require('../Models/housekeepingStatus');
var express           = require('express'),
    housekeepingStatusController   = express.Router();
var bookshelf = require('../bookshelf.js');
var check = require('./checkToken');


var housekeepingStatusCollection = bookshelf.Collection.extend({
    model:HousekeepingStatus
});





housekeepingStatusController
    .route('/:id')
    .get(check, function(req, res, next){
        housekeepingStatusCollection.query({where: {houseKeepingStatusId: req.params.id}})
            .fetch()
            .then(function(hkStatus){
                res.send(hkStatus.toJSON());
            });

    })
    .put(check, function( req, res, next){
        HousekeepingStatus.forge({houseKeepingStatusId: req.params.id})
            .fetch({require: true})
            .then(function(hkStatus){
                hkStatus.save({
                    
                    name: req.body.name || hkStatus.get('name'),
                    description: req.body.description || hkStatus.get('description')

                }).then(function(hkStatus){
                    res.send(hkStatus.toJSON());
                })
            });
    })
    .delete(check, function(req, res, next){
        new HousekeepingStatus({houseKeepingStatusId: req.params.id})
            .destroy()
            .then(function(hkStatus){
                res.status(200).json({message: 'success'});

            }).catch(function (err){
            res.status(500).json({message: err.message});
        });

    });

housekeepingStatusController
    .route('/')
    .get(check, function(req, res, next){
        housekeepingStatusCollection.forge().fetch()
            .then(function(hkStatus){
                res.send(hkStatus.toJSON());
            })

    })
    .post(check, function(req, res, next){
        HousekeepingStatus.forge({
        }).save({ name: req.body.name, description: req.body.description}, {require: true}, {method: "insert"} )
            .then(function (hkStatus){
                res.json(hkStatus.toJSON());
            })


    });





module.exports = housekeepingStatusController;