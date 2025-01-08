const express = require("express");

const {
  getQuestions,
  getQuestionById,
  createQuestion,
  deleteQuestionById,
} = require("../controllers/questionController");
const { protect } = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/", protect, createQuestion); // Only authenticated users can post a question
router.get("/", getQuestions);
router.get("/:id", getQuestionById);
router.delete("/:id", protect, deleteQuestionById); // Only authenticated users can delete a question

module.exports = router;
