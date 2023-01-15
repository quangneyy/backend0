const express = require("express");
const { getHomepage, getQuangNey } = require("../controllers/homeController");
const router = express.Router();

// router.Method('/route', handler)

// khai bao route
router.get("/", getHomepage);
router.get("/quangney", getQuangNey);

module.exports = router; //export default
