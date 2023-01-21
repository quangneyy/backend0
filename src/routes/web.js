const express = require("express");
const {
  getHomepage,
  getQuangNey,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");
const router = express.Router();

// router.Method('/route', handler)

// khai bao route
router.get("/", getHomepage);
router.get("/quangney", getQuangNey);

router.get("/create", getCreatePage);

router.post("/create-user", postCreateUser);

module.exports = router; //export default
