const express = require("express");

const router = express.Router();

// khai bao route
router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/quangney", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router; //export default
