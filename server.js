const express = require("express");
const app = express();




app.listen(3000, () => console.log("Connected on port 3000!"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  next();
});



app.get("/", function(req, res) {
  res.send({title: "Home Page"});
});

