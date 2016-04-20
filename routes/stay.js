/**
 * Created by seisan on 4/11/16.
 */
var Stay = require('../Models/stay');
var express           = require('express'),
    stayController   = express.Router();
var bookshelf = require('../bookshelf.js');
var check = require('./checkToken');
var Folio = require('../Models/folio');

var stayCollection = bookshelf.Collection.extend({
    model:Stay
});





stayController
    .route('/:id')
    .get(check, function(req, res, next){
        stayCollection.query({where: {stayId: req.params.id}})
            .fetch({withRelated: ['employees']})
            .then(function(stay){
                res.send(stay.toJSON());
            });

    })
    .put(check, function( req, res, next){
        Stay.forge({stayId: req.params.id})
            .fetch({require: true})
            .then(function(stay){
                stay.save({
                    checkInDate: req.body.checkInDate || stay.get('checkInDate'),
                    checkOutDate: req.body.checkOutDate || stay.get('checkOutDate'),
                    status: req.body.status || stay.get('status'),
                    rateId: req.body.rateId || stay.get('rateId'),
                    marketId: req.body.marketId || stay.get('marketId'),
                    folioId: req.body.folioId || stay.get('folioId'),
                    guestId: req.body.guestId || stay.get('guestId'),
                    empId: req.body.empId || stay.get('empId'),
                    locationId: req.body.locationId || stay.get('locationId'),
                    roomNumber: req.body.roomNumber || stay.get('roomNumber'),
                    roomType: req.body.roomType || stay.get('roomType'),
                    taxProfile: req.body.taxProfile || stay.get('taxProfile')
                }).then(function(stay){
                    res.send(stay.toJSON());
                })
            });
    })
    .delete(check, function(req, res, next){
        new Stay({stayId: req.params.id})
            .destroy()
            .then(function(stay){
                res.status(200).json({message: 'success'});

            }).catch(function (err){
            res.status(500).json({message: err.message});
        });

    });

stayController
    .route('/')
    .get(check, function(req, res, next){
        stayCollection.forge().fetch({withRelated:['employees', 'roomNumber', 'folio', 'guest', 'location', 'market', 'rate', 'roomType', 'taxProfile']})
            .then(function(stay){
                res.send(stay.toJSON());
            })

    })
    .post(check, function(req, res, next){
        var StayId;
        var FolioId;
        Stay.forge({

            checkInDate: req.body.checkInDate,
            checkOutDate: req.body.checkOutDate ,
            status: req.body.status ,
            rateId: req.body.rateId ,
            marketId: req.body.marketId ,
            guestId: req.body.guestId ,
            empId: req.body.empId,
            locationId: req.body.locationId,
            roomNumber: req.body.roomNumber,
            roomType: req.body.roomType,
            taxProfile: req.body.taxProfile
        }).save().then(function (stay){
            StayId = stay.get('stayId');

        }).then(function(){
            Folio.forge({

            }).save().then(function (folio){

                Stay.forge({stayId: StayId})
                    .fetch({require: true})
                    .then(function (stay){
                        stay.save({
                            folioId: folio.get('folioId')
                        }).then(function(stay){
                            res.send( stay.toJSON());
                        })
                    })
            });
        })
    });



module.exports = stayController;