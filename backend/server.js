const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require('path');
const dbName = require('./config/dbKey/dbKeys');
const passport = require('passport');
// passport config
require('./config/passport')(passport);

const app = express();
const PORT = process.env.PORT || 8080;

// app.get('*', function(req, res) {  
//   res.redirect('https://' + req.headers.host + req.url);
// });

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


app.use(morgan("dev"));
app.use(require('cors')());


app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

// react server deplyment
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Routes
const users = require('./routes/users.js')
app.use('/users', users);


const appRouter = require('./routes/app-router.js');
app.use('/app', passport.authenticate('jwt', { session : false }), appRouter);




app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'build', '404.html'));;
});
