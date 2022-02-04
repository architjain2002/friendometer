// requiring certain modules
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
const server = http.createServer(app);
const path = require("path");
const { find } = require("async");
const bcrypt = require("bcrypt");
// middleware required
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.json());

// hostname and port
// const hostname = "0.0.0.0"; // ignore for deployment
const port = process.env.PORT || 3000;

//database connections
const mongoose = require("mongoose");
// models import
const AuthModel = require("./models/authModel");

// connect to the mongodb database
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/geofriends", {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("mongodb connected!");
  })
  .catch((err) => {
    console.log(err);
  });
app.post("/authCustom", (req, res) => {
  const authObj = new AuthModel(req.body);
  const password = authObj.Password;
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) throw err;
      else {
        authObj.Password = hash;
        console.log(hash);
      }
    });
  });
});
// listening to the server
server.listen(port, () => {
  console.log(`server running`);
  // console.log(`server running `);
});
