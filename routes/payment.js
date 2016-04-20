/**
 * Created by seisan on 4/11/16.
 */
/**
 * Created by seisan on 4/11/16.
 */

var Payment = require('../Models/payment');
var CC = require('../Models/ccPayment');
var Cash = require('../Models/cashPayment');
var CheckPayment = require('../Models/checkPayment');
var DirectBill = require('../Models/directBillPayment');
var AccountReceivable = require('../Models/accountReceivable')

var express           = require('express'),
    paymentController   = express.Router();
var bookshelf = require('../bookshelf.js');
var check = require('./checkToken');


var paymentCollection = bookshelf.Collection.extend({
    model:Payment
});



paymentController
    .route('/CC/:folioId')
    .get(check, function(req, res, next){
        paymentCollection.forge({where: {folioId: req.params.folioId}})
            .fetch()
            .then(function(guest){
                res.send(guest.toJSON());
            })

    })
    .post(check, function(req, res, next){
        Payment.forge({
        }).save({  fName: req.body.fName, lName: req.body.lName, phoneNum: req.body.phoneNum, email: req.body.email,
                street: req.body.street, city: req.body.city, state: req.body.state, zipcode: req.body.zipcode,
                compId: req.body.compId}, {require: true}, {method: "insert"} )
            .then(function (guest){
                res.json(guest.toJSON());
            })


    });





module.exports = paymentController;