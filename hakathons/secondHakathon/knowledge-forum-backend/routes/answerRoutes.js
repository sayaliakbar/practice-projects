const express = require("express");
const { addAnswer, deleteAnswer } = require("../controllers/answerController");

const router = express.Router();
const { validateAnswer } = require("../middleware/validationMiddleware");

const { protect } = require("../middleware/authMiddleware");

router.post("/:questionId/", protect, validateAnswer, addAnswer); // Add an answer to a question
router.delete("/:answerId", protect, deleteAnswer); // Delete an answer

module.exports = router;
