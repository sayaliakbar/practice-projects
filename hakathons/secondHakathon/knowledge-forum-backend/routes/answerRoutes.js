const express = require("express");
const { addAnswer, deleteAnswer } = require("../controllers/answerController");
const { addReply } = require("../controllers/replyController");
const router = express.Router();
const {
  validateAnswer,
  validateReplies,
} = require("../middleware/validationMiddleware");

const { protect } = require("../middleware/authMiddleware");

router.post("/:questionId/", protect, validateAnswer, addAnswer); // Add an answer to a question
router.post("/:answerId/replies", protect, validateReplies, addReply); // Add a reply to an answer
router.delete("/:answerId", protect, deleteAnswer); // Delete an answer

module.exports = router;
