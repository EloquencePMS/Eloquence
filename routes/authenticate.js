/**
 * Created by seisan on 3/28/16.
 */



var User = require('../Models/users');
var express           = require('express');
var authenticateController = express.Router();
var bookshelf = require('../bookshelf.js');
var jwt         = require( 'jsonwebtoken' );
var bcrypt      = require( 'bcrypt' );

authenticateController.route('/')
    .post(function (req,res,next){


        if(!req.body.userName){
            return next( httpErrors.BadRequest( 'Missing required parameter: `userName`' ) );
        }
        if(!req.body.password){
            return next( httpErrors.BadRequest( 'Missing required parameter: `password`' ) );
        }

    User.forge().query({where: {userName: req.body.userName}})
        .fetch({withRelated:['employee']})
        .then(function (user){

            if(isPasswordValid(user.get('password'), req.body.password)) {
                var token = jwt.sign(user, process.env.SECRET, {
                    expiresIn: '1h'

                });

                res.json({
                    user: user,
                    token: token
                });
            }else{
                res.status(403).json({message: 'Invalid Username or Password'})
            }

        }).catch(function (error) {
            console.log(error.message);
            res.status(403).json({message: error.message});
    })


});

authenticateController.route('/:id')
    .post(function (req,res,next) {
        if(!req.body.userName){
            return next( httpErrors.BadRequest( 'Missing required parameter: `userName`' ) );
        }
        if(!req.body.password){
            return next( httpErrors.BadRequest( 'Missing required parameter: `password`' ) );
        }

        User.query({where: {empId: req.params.id}})
            .fetch()
            .then(function (user){
                if(!user){
                    User.forge({
                        userName: req.body.userName,
                        empId: req.params.id,
                        password: setPassword(req.body.password)
                     }).save()
                        .then(function (thisuser){
                            res.send(thisuser.toJSON());
                        })
                }else{
                    return next( httpErrors.BadRequest( 'User Already Exists' ) );

                }
            })



    });

var setPassword = function (password){
    var salt = bcrypt.genSaltSync( 1024 );
    return bcrypt.hashSync( password, salt );
}
var isPasswordValid = function (userpassword, reqpassword) {
    if (!reqpassword) {
        return false;
    } else {
        return bcrypt.compareSync(reqpassword, userpassword);
    }
}

module.exports = authenticateController;