/**
 * Created by seisan on 4/11/16.
 */
var RoomNumber = require('../Models/roomNumber');
var express           = require('express'),
    roomNumberController   = express.Router();
var bookshelf = require('../bookshelf.js');
var check = require('./checkToken');


var roomNumberCollection = bookshelf.Collection.extend({
    model:RoomNumber
});

roomNumberController
    .route('/:id')
    .get(check, function(req, res, next){
        RoomNumber.query({where: {roomNumber: req.params.id}})
            .fetch({withRelated: ['housekeepingStatus', 'roomType']}, {require:true})
            .then(function(roomnumber){
                if(roomnumber === null) {
                    res.status(204).json();
                }else{
                    res.send(roomnumber.toJSON());
                }
            });

    })
    .put(check, function( req, res, next){
        RoomNumber.forge({roomNumber: req.params.id})
            .fetch({require: true})
            .then(function(roomnumber){
                roomnumber.save({
                    roomNumber: req.body.roomNumber || roomnumber.get('roomNumber'),
                    houseKeepingStatusId: req.body.houseKeepingStatusId || roomnumber.get('houseKeepingStatusId'),
                    roomType: req.body.roomType || roomnumber.get('roomType')
                }).then(function(roomnumber){
                    res.send(roomnumber.toJSON());
                })
            });
    })
    .delete(check, function(req, res, next){
        new RoomNumber({roomNumber: req.params.id})
            .destroy()
            .then(function(roomnumber){
                res.status(200).json({message: 'success'});

            }).catch(function (err){
            res.status(500).json({message: err.message});
        });

    });

roomNumberController
    .route('/')
    .get(check, function(req, res, next){
        roomNumberCollection.forge().fetch({withRelated: ['housekeepingStatus', 'roomType']})
            .then(function(roomnumber){
                res.send(roomnumber.toJSON());
            })

    })
    .post(check, function(req, res, next){
        RoomNumber.forge({


        }).save({roomNumber: req.body.roomNumber, roomType: req.body.roomType, houseKeepingStatusId: req.body.houseKeepingStatusId}, {require: true}, {method: "insert"})
            .then(function (roomnumber){
                res.json(roomnumber.toJSON());
            })


    });





module.exports = roomNumberController;