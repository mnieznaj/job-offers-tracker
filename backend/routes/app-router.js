const express = require('express');
const router = express.Router();
const AddJobOffer = require("../models/addJobOffer");

// const { ensureAuthenticated } = require('../config/auth');

// router.get('/', ensureAuthenticated, (req, res) => {
router.get('/', (req, res) => {
    res.send({msg: "authenticated successfully", user: req.user,     token : req.query.secret_token
    });
});


router.get("/get-offer-list/:id", (req, res) => {
    console.log(req.params.id);
    AddJobOffer.findById(req.params.id)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => console.log(err));
});
  
router.get("/get-offer-list", (req, res) => {
    AddJobOffer.find()
      .then((response) => {
        res.json(response);
      })
      .catch((err) => console.log(err));
});
  
  
router.post("/add-offer", (req, res) => {
    const offer = new AddJobOffer(req.body); //not sure about json here
    console.log(offer);
    offer.save()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
    res.status(200);
});
  
router.put("/edit-offer/:id", (req, res) => {
    AddJobOffer.findByIdAndUpdate(req.params.id,req.body)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
});
  
router.delete("/delete-offer/:id", (req, res) => {
    const id = req.body.id;
    console.log(req.params);
    AddJobOffer.findByIdAndDelete(id)
      .then((result) => {
        res.json({ deleted: true });
      })
      .catch((err) => console.log(err));
});

module.exports = router;