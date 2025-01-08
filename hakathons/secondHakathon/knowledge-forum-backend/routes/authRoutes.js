const express = require("express");
const {
  validateRegister,
  validateLogin,
} = require("../middleware/validationMiddleware");
const {
  registerUser,
  loginUser,
  displayUsers,
  deleteUser,
} = require("../controllers/authController");
const router = express.Router();

router.post("/register", validateRegister, registerUser);
router.post("/login", validateLogin, loginUser);
router.get("/users", displayUsers);
router.delete("/users/:id", deleteUser);

module.exports = router;
