const express = require("express");
const { addAnswer, addReply } = require("../controllers/answerController");
const router = express.Router();

router.post("/:questionId/", addAnswer); // Add an answer to a question
router.post("/:answerId/replies", addReply); // Add a reply to an answer

module.exports = router;
