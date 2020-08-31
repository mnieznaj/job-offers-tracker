const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const AddJobOffer = require("./models/addJobOffer");
const dbName = require('./dbKey');

// allowing cors for dev purposes, delete on deployment
// const cors = require("cors");
// const corsOption = { origin: "http://localhost:3000" };

const app = express();

const PORT = process.env.PORT || 8080;



mongoose
  .connect(dbName, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((response) => {
    console.log("connected to db");
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  })
  .catch((err) => console.log(err));


mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

// app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(morgan("dev"));

// enabling cors
app.use(require('cors')());


// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://localhost:3000"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// }); // delete on deplayment

app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/test", (req, res) => {
  const test = {
    test: "passed",
  };
  res.json(test);
});

app.get("/get-offer-list/:id", (req, res) => {
  console.log(req.params.id);
  AddJobOffer.findById(req.params.id)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
});

app.get("/get-offer-list", (req, res) => {
  AddJobOffer.find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
});


app.post("/add-offer", (req, res) => {
  const offer = new AddJobOffer(req.body); //not sure about json here
  console.log(offer);
  offer.save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
  res.status(200);
});

app.put("/edit-offer/:id", (req, res) => {
  AddJobOffer.findByIdAndUpdate(req.params.id,req.body)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
})

app.delete("/delete-offer/:id", (req, res) => {
  const id = req.body.id;
  console.log(req.params);
  AddJobOffer.findByIdAndDelete(id)
    .then((result) => {
      res.json({ deleted: true });
    })
    .catch((err) => console.log(err));
});

app.use((req, res) => {
  res.status(404).render("404");
});
