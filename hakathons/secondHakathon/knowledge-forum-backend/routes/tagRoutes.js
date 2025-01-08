const express = require("express");

const { validateTags } = require("../middleware/validationMiddleware");
const router = express.Router();

const {
  getAllTags,
  createTag,
  deleteTag,
} = require("../controllers/tagController");

router.get("/", getAllTags);
router.post("/", validateTags, createTag);
router.delete("/:id", deleteTag);

module.exports = router;
