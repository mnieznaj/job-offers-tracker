const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
// const flash = require("connect-flash");
const path = require('path');

const dbName = require('./config/dbKeys');
// require('./config/passport');

const session = require("express-session");
const passport = require('passport');
// passport config
require('./config/passport')(passport);


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

// setting up react deployment
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.urlencoded({ extended: true })); //extended: false allows to get data from requests body
// app.use(express.json());

// Express Session
// app.use(session({
//   secret: 'secret',
//   resave: true,
//   saveUninitialized: true
// }));

// Passport
// app.use(passport.initialize());
// app.use(passport.session());

// // Connect flash
// app.use(flash());

// // global vars for colors of msg's errors
// app.use((req, res, next) => {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   next();
// })

app.use(morgan("dev"));
app.use(require('cors')());


app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

// Routes
const users = require('./routes/users.js')
app.use('/users', users);

// coś się zjebało z get requestem dla listy jak dodałem poniższe
// app.use('/app', require('./routes/app-router.js'));
const appRouter = require('./routes/app-router.js');
app.use('/app', passport.authenticate('jwt', { session : false }), appRouter);


// react server deplyment
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use((req, res) => {
  // res.status(404).render("404");
  res.status(404).sendFile(path.join(__dirname, 'build', '404.html'));;
});
