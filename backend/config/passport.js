const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// Load User Model
const User = require('../models/User');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({usernameField: "email"}, (email, password, done) => {
            // Match user
            User.findOne({email: email})
                .then(user => {
                    if(!user){
                        return done(null, false, {message: "That email is not registered"})
                    }
                    // Match password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;
                        if (isMatch){
                            return done(null, user);
                        } else {
                            return done(null, false, {message: "password incorrect"});
                        }
                    })
                })
                .catch(err => console.log(err));
        })
    )

    passport.use(new JWTStrategy({
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey   : 'your_jwt_secret'
        },
        function (jwtPayload, cb) {

                //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
                console.log(jwtPayload);
                return User.findById(jwtPayload._id)
                    .then(user => {
                        return cb(null, user);
                    })
                    .catch(err => {
                        return cb(err);
                    });
            }
    ));

    // passport.serializeUser((user, done) => {
    //     done(null, user.id);
    // });
      
    // passport.deserializeUser((id, done) => {
    //     User.findById(id, (err, user) => {
    //       done(err, user);
    //     });
    // });
      
}