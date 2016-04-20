/**
 * Created by seisan on 4/19/16.
 */
var Stay = require('../Models/stay');
var express           = require('express'),
    initialDataController   = express.Router();
var bookshelf = require('../bookshelf.js');
var check = require('./checkToken');
var Rooms = require('../Models/roomNumber');



var initialdate =  new Date();
var date = new Date(initialdate.getFullYear(), initialdate.getMonth(), initialdate.getDate());
var checkins;
var checkouts;
var stayover;
var rooms

var roomCollection = bookshelf.Collection.extend({
   model:Rooms
});
var checkinCollection = bookshelf.Collection.extend({
    model:Stay
});
var checkoutCollection = bookshelf.Collection.extend({
    model:Stay
});
var stayOverCollection = bookshelf.Collection.extend({
    model:Stay
});





initialDataController
    .route('/')
    .get(check, function(req, res, next){
        checkinCollection.query({where: {checkInDate: date}}).fetch()
            .then(function(stay){
                checkins = stay;
            }).then(function () {
        checkoutCollection.query({where: {checkOutDate: date}}).fetch()
            .then(function(stay){
                checkouts = stay;
            }).then(function () {
            stayOverCollection.query({where: {status: "In House"}, whereNot:{checkOutDate: date}} ).fetch()
                .then(function (stay) {
                    stayover = stay;

                    }).then(function () {

                roomCollection.forge().fetch({withRelated: ['housekeepingStatus']})
                    .then(function (room) {
                        rooms = room;
                        res.status(200).json({
                            checkIns: checkins.toJSON(),
                            checkOuts: checkouts.toJSON(),
                            stayOver: stayover.toJSON(),
                            rooms:rooms.toJSON()});

                    });

                    });
                    });
                });





    });





module.exports = initialDataController;