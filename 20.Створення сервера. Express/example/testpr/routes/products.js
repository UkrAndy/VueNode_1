var express = require('express');
var router = express.Router();

app.get("/add",function (req,res) {
  res.send("Add");
});
app.get("/remove",function (req,res) {
  res.send("remove");
});
app.get("/print",function (req,res) {
  res.send("print");
});
app.get("/call",function (req,res) {
  res.send("call");
});

module.exports = router;
