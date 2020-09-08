const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.get('/', ensureAuthenticated, (req, res) => {
    /* res.render('app', {
        name: req.user.name
    });*/
    res.send({msg: "authenticated successfully", user: req.user});
    // res.render('app', {
    //     user: req.user
    // });

    // może ewentualnie zwrócić usera jako id i kilka podstawowych danych do stanu aplikacji?
});

module.exports = router;