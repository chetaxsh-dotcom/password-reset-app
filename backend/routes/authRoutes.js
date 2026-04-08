const express = require("express");
const router = express.Router();

const {
  testController,
  forgotPassword,
  resetPassword,
  registerUser
} = require("../controllers/authController");

router.get("/test", testController);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/register", registerUser)

module.exports = router;  