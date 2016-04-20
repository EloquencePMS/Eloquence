/**
 * Created by seisan on 4/19/16.
 */
var Stay = require('../Models/stay');
var express           = require('express'),
    calendarController   = express.Router();
var bookshelf = require('../bookshelf.js');
var check = require('./checkToken');
var Rooms = require('../Models/roomNumber');


var stayCollection = bookshelf.Collection.extend({
    model: Stay
})

var stays;
var rooms;


var date;






calendarController
    .route('/:year/:month/:dates')
    .get(check, function(req, res, next){

        var myDate = req.params.month +' '+ req.params.dates+ ', ' + req.params.year;
        date = new Date(myDate);


       stayCollection.query(function(count){
           count.where( 'checkOutDate', '>', date)
               .andWhere('status', '=', 'In House').orWhere('checkInDate', '=', date);
       }).fetch()



           .then(function(count){
               stays = count.length;
           }).then(function(){
           Rooms.count('roomNumber')
               .then(function(roomsCount){
                  rooms = roomsCount;
                  var availability = rooms - stays;
                  res.status(200).json({availability: availability});
               });

       });


    });





module.exports = calendarController;