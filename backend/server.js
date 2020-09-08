const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require('passport');

// App Deplyoment https://create-react-app.dev/docs/deployment/

// passport config
require('./config/passport')(passport);

const AddJobOffer = require("./models/addJobOffer");
const dbName = require('./config/dbKeys');

// allowing cors for dev purposes, delete on deployment
// const cors = require("cors");
// const corsOption = { origin: "http://localhost:3000" };

const app = express();

const PORT = process.env.PORT || 8080;



mongoose
  .connect(dbName.offers, { useNewUrlParser: true, useUnifiedTopology: true })
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
app.use(express.urlencoded({ extended: true })); //extended: false allows to get data from requests body
// app.use(express.json());

// Express Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// global vars for colors of msg's errors
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
})

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

// Routes
app.use('/users', require('./routes/users.js'));

// coś się zjebało z get requestem dla listy jak dodałem poniższe
app.use('/app', require('./routes/app-router.js'));


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
