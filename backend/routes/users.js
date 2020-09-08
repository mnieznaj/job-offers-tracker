const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../models/User');

// login page
// router.get('/login', (req,res) => {
//     res.render('login')
// });

// register page
// router.get('/register', (req,res) => {
//     res.render('register')
// });

// reister handler
router.post('/register-user', (req, res) => {
    const {name, email, password, repeatPassword} = req.body;
    let errors = [];

    // check required fields
    if(!name || !email || !password || !repeatPassword){
        errors.push({msg: "Please fill in all fields"})
    }

    // check passwords match
    if(password !== repeatPassword){
        errors.push({msg: 'Passwords do not match'});
    }

    // check pass length
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
        // Validation passed
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
                    })
                }

                // hash password
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        // set password to hashed
                        newUser.password = hash;
                        // save user
                        newUser.save().
                            then(user => {
                                // req.flash('success_msg', 'You are now Registered and can log in');
                                res.send({ msg: "user created and added successfully"})
                            })
                            .catch(err => console.log(err))
                    })
                })
            });
    }
});

// Login handle
router.post('/login-user', async (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/app',
        failureRerirect: '/users/login'
        // , failureFlash: true
    })(req, res, next);
})
// Logout handle
router.get('/logout-user', (req, res) => {
    req.logout();
    // can put here a message eg. res.send(smth)
    res.redirect('/');
});

module.exports = router;