const express = require('express');
const router = express.Router();
const AddJobOffer = require("../models/addJobOffer");

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
    const offer = new AddJobOffer({offers: [req.body]});
    console.log(offer);
    
    // if(!((offer.status === "none") || (offer.status === 'applied') || (offer.status === "rejected") || (offer.status === "succeded"))){
    //   return res.json({msg: "wrong status set for offer"});
    // }
    res.json({error: false});
});
  
router.put("/edit-offer/:id", (req, res) => {
  res.json({error: false});

});
  
router.delete("/delete-offer/:id", (req, res) => {
    const id = req.body.id;
    console.log(req.params);
    // setTimeout(() => res.status(200), 1000);
    res.json({error: false});

});

module.exports = router;