const express = require("express");
const {
  registerUser,
  loginUser,
  displayUsers,
} = require("../controllers/authController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", displayUsers);

module.exports = router;
