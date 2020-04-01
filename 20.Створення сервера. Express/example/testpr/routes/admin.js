var express = require('express');
var router = express.Router();

router.get("/add",function (req,res) {
  res.send("Add");
});
router.get("/remove",function (req,res) {
  res.send("remove");
});
router.get("/print",function (req,res) {
  res.send("print");
});
router.get("/call",function (req,res) {
  res.send("call");
});

module.exports = router;
