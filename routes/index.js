var express = require("express");
var router = express.Router();
const temp = require("../utils/index");
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Reading contntent from json",
    dataToPass: temp.dataJson,
  });
});

module.exports = router;
