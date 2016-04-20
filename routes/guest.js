/**
 * Created by seisan on 4/11/16.
 */

var Guest = require('../Models/guest');
var express           = require('express'),
    guestController   = express.Router();
var bookshelf = require('../bookshelf.js');
var check = require('./checkToken');


var guestCollection = bookshelf.Collection.extend({
    model:Guest
});

guestController
    .route('/:id')
    .get(check, function(req, res, next){
        Guest.query({where: {guestId: req.params.id}})
            .fetch({withRelated: ['comp', 'comp.rate', 'comp.taxProfile', 'comp.taxProfile.taxRate']})
            .then(function(guest){
                res.send(guest.toJSON());
            });

    })
    .put(check, function( req, res, next){
        Guest.forge({guestId: req.params.id})
            .fetch({require: true})
            .then(function(guest){
                guest.save({

                    fName: req.body.fName                   || guest.get('fName'    ),
                    lName: req.body.lName                   || guest.get('lName' ),
                    phoneNum: req.body.phoneNum             || guest.get('phoneNum'       ),
                    email: req.body.email                   || guest.get('email'          ),
                    street: req.body.street                 || guest.get('street'         ),
                    city: req.body.city                     || guest.get('city'           ),
                    state: req.body.state                   || guest.get('state'          ),
                    zipcode: req.body.zipcode               || guest.get('zipcode'        ),
                    compId: req.body.rateId                 || guest.get('compId'         )

                }).then(function(guest){
                    res.send(guest.toJSON());
                })
            });
    })
    .delete(check, function(req, res, next){
        new Guest({guestId: req.params.id})
            .destroy()
            .then(function(guest){
                res.status(200).json({message: 'success'});

            }).catch(function (err){
            res.status(500).json({message: err.message});
        });

    });

guestController
    .route('/')
    .get(check, function(req, res, next){
        guestCollection.forge().fetch({withRelated: ['comp', 'comp.rate', 'comp.taxProfile', 'comp.taxProfile.taxRate']})
            .then(function(guest){
                res.send(guest.toJSON());
            })

    })
    .post(check, function(req, res, next){
        Guest.forge({
        }).save({  fName: req.body.fName, lName: req.body.lName, phoneNum: req.body.phoneNum, email: req.body.email,
                street: req.body.street, city: req.body.city, state: req.body.state, zipcode: req.body.zipcode,
                compId: req.body.compId}, {require: true}, {method: "insert"} )
            .then(function (guest){
                res.json(guest.toJSON());
            })


    });





module.exports = guestController;