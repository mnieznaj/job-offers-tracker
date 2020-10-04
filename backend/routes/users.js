const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');


const User = require('../models/User');
const AddJobOffer = require("../models/addJobOffer");

router.post('/register-user', (req, res) => {
    const {name, email, password, repeatPassword} = req.body;
    let errors = [];

    if(!name || !email || !password || !repeatPassword){
        errors.push({msg: "Please fill in all fields"})
    }

    if(password !== repeatPassword){
        errors.push({msg: 'Passwords do not match'});
    }

    if(password.length < 6){
        errors.push({msg: 'Password should be at least 6 characters'});
    }

    if(errors.length > 0){
        res.send({
            errors,
            name,
            email,
            password,
            repeatPassword
        })
    }else{
        User.findOne({email: email})
            .then(user => {
                let newUser;
                if(user){
                    errors.push({ msg: "Email is already registered." });
                    res.send({
                        errors,
                        name,
                        email,
                        password,
                        repeatPassword
                    })
                } else {
                    newUser = new User({
                        name,
                        email,
                        password
                    });
                }
                        const offerDb = new AddJobOffer({
                            userId: newUser._id,
                            offers: []
                        });
                        offerDb.save();
                        newUser.dbId = offerDb._id;
                        console.log(newUser);
                        // newUser.save();

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        // offerDb.save();
                        newUser.password = hash;
                        newUser.save().
                            then(user => {
                                res.send({ msg: "user created and added successfully"})
                            })
                            .catch(err => console.log(err))
                    })
                })
            });
    }
});

router.post('/login-user', (req, res, next) => {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user   : user
            });
        }
       req.login(user, {session: false}, (err) => {
           if (err) {
               return res.send(err);
           }
           // generate a signed json web token with the contents of user object and return it in the response
            const token = jwt.sign(user.toJSON(), 'your_jwt_secret', {expiresIn: "7d"});
            const userId = user._id;
            const dbId = user.dbId;
           return res.json({token,userId,dbId});
        });
        console.log("Check for response being send")
    })(req, res);
})

router.get('/logout-user', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;