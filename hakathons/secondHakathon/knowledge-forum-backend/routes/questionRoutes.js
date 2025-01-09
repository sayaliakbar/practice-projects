const express = require("express");

const { validateQuestion } = require("../middleware/validationMiddleware");

const {
  getQuestions,
  getQuestionById,
  createQuestion,
  deleteQuestionById,
} = require("../controllers/questionController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, validateQuestion, createQuestion); // Only authenticated users can post a question
router.get("/", getQuestions); // Search, filter, paginate, and sort questions
router.get("/:id", getQuestionById); // Get a specific question by ID
router.delete("/:id", protect, deleteQuestionById); // Only authenticated users can delete a question

module.exports = router;
