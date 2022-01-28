// requiring certain modules
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
const server = http.createServer(app);
const path = require("path");
const { find } = require("async");
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
// const Event = require("./models/events");

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
// listening to the server
server.listen(port, () => {
  console.log(`server running`);
  // console.log(`server running `);
});
