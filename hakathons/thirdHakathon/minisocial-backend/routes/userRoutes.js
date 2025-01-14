const express = require("express");
const router = express.Router();
const {
  displayUsers,
  deleteUser,
  displayUserById,
} = require("../controllers/authController");

const { protect } = require("../middlewares/authMiddleware");

router.get("/", displayUsers);
router.get("/:id", displayUserById);
router.delete("/:id", protect, deleteUser);

module.exports = router;
