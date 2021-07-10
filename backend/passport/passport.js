"use strict";
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
var { secret } = require("../database/config");
const Customer = require('../Models/CustomerModel');
//const Users = require('../Models/UserModel');

// Setup work and export for the JWT passport strategy
function auth() {
    console.log('inside auth',secret)
    var opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: secret
    };
    passport.use(
        new JwtStrategy(opts, (jwt_payload, callback) => {
            console.log('inside strategy')
            const user_id = jwt_payload._id;
            return callback(null,true);
        //     Customer.findById(user_id, (err, results) => {
        //         if (err) {
        //             return callback(err, false);
        //         }
        //         if (results) {
        //             console.log('results',results);
        //             callback(null, results);
        //         }
        //         else {
        //             callback(null, false);
        //         }
        //     });
         })
    )
}

exports.auth = auth;
exports.checkAuth = passport.authenticate("jwt", { session: false });


