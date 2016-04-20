/**
 * Created by seisan on 4/11/16.
 */
/**
 * Created by MichaelLeffert on 2/11/16.
 */
var RoomType = require('../Models/roomType');
var express           = require('express'),
    roomTypeController   = express.Router();
var bookshelf = require('../bookshelf.js');
var check = require('./checkToken');


var roomTypeCollection = bookshelf.Collection.extend({
    model:RoomType
});





roomTypeController
    .route('/:id')
    .get(check, function(req, res, next){
        roomTypeCollection.query({where: {roomType: req.params.id}})
            .fetch()
            .then(function(roomtype){
                res.send(roomtype.toJSON());
            });

    })
    .put(check, function( req, res, next){
        RoomType.forge({roomType: req.params.id})
            .fetch({require: true})
            .then(function(roomtype){
                roomtype.save({

                    ammenities: req.body.ammenities || roomtype.get('ammenities'),

                }).then(function(roomtype){
                    res.send(roomtype.toJSON());
                })
            });
    })
    .delete(check, function(req, res, next){
        new RoomType({roomType: req.params.id})
            .destroy()
            .then(function(roomtype){
                res.status(200).json({message: 'success'});

            }).catch(function (err){
            res.status(500).json({message: err.message});
        });

    });

roomTypeController
    .route('/')
    .get(check, function(req, res, next){
        roomTypeCollection.forge().fetch()
            .then(function(roomtype){
                res.send(roomtype.toJSON());
            })

    })
    .post(check, function(req, res, next){
        RoomType.forge({
        }).save({roomType: req.body.roomType, ammenities: req.body.ammenities}, {require: true}, {method: "insert"} )
            .then(function (roomtype){
                res.json(roomtype.toJSON());
            })


    });





module.exports = roomTypeController;