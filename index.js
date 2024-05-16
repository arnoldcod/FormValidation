//dependency
const express = require ("express");
const mongoose = require('mongoose'); // for mongodb
const path = require('path'); //for pug
const passport = require('passport'); //for passport
const moment = require('moment'); //for moment
const expressSession = require('express-session')({ // for express-session
    secret:"secret",
    resave: false,
    saveUninitialized: false
  });



require("dotenv").config();


//instantiation
const app = express();
const port = process.env.port || 3000  // listening to port



//impoting Routes
const dataFormRoutes = require("./routes/formRoutes");







//configuration
 mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("mongodb connection successfully open");
  })
  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
 });

 app.locals.moment = moment;

 app.set("view engine", "pug"); // setting the view engine to pug
 app.set("views", path.join(__dirname, "views")); //specify the directory where the views are found


 //middleware
 //Express session  configurations
 app.use(expressSession);
 app.use(passport.initialize());
 app.use(passport.session());




//use imported route
app.use("/", dataFormRoutes);







//bootstrapping server
  // For invalid routes
  app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
  });
  
    //always the last line in the code!!!
  app.listen(port, () => console.log(`listening on port ${port}`));