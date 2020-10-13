const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

// const User = require('../models/User');
// const AddJobOffer = require("../models/addJobOffer");

router.post('/register-user', (req, res) => {
    // setTimeout(() => res.status(200), 1000);
    res.json({error: false});

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
});

router.post('/change-password',(req, res) => {
    // setTimeout(() => res.status(200), 1000);
    res.json({error: false});

});
router.post('/change-name',(req, res) => {
    // setTimeout(() => res.status(200), 1000);
    res.json({error: false});

});
router.post('/change-mail',(req, res) => {
    // setTimeout(() => res.status(200), 1000);
    res.json({error: false});

});

router.get('/logout-user', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;