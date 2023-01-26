const express = require("express");
const {
  getHomepage,
  getQuangNey,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
} = require("../controllers/homeController");
const router = express.Router();

// router.Method('/route', handler)

// khai bao route
router.get("/", getHomepage);
router.get("/quangney", getQuangNey);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);

router.post("/update-user", postUpdateUser);

module.exports = router; //export default
