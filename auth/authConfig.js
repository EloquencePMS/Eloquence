/**
 * Created by MichaelLeffert on 3/6/16.
 */
var passport = require('passport');
var UniqueTokenStrategy = require('passport-unique-token').Strategy;
var Employee = require('../Models/employees');



passport.use(new UniqueTokenStrategy(
    function (token, done) {
        Employee.findOne({ uniqueToken: token, expireToken: { $gt: Date.now() } }, function (err, emp) {
            if (err) {
                return done(err);
            }

            if (!emp) {
                return done(null, false);
            }

            return done(null, emp);
        });
    }
));