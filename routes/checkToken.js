/**
 * Created by seisan on 3/29/16.
 */
var jwt = require('jsonwebtoken');

var checkToken = function(req, res, next){

    var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];

    if(token){

        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            if (err) {
                return res.status(403).json({message: 'Invalid Token'});
            } else {
                // if everything is good, save to request for use in other routes
               if(decoded.expiresIn <= Date.now()){
                   return res.end('Access Token has expired', 400);
               }else{
                   console.log('here' )
                   next();
               }

            }
        });

    }else{
       return res.status(403).json({message: 'No Token'})
    }


}
 module.exports = checkToken;