const express = require("express");
const {
  validateRegister,
  validateLogin,
} = require("../middlewares/validationMiddleware");
const { registerUser, loginUser } = require("../controllers/authController");

const router = express.Router();

router.post("/register", validateRegister, registerUser);
router.post("/login", validateLogin, loginUser);

module.exports = router;
