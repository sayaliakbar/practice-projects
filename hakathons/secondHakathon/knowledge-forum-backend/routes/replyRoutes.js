const express = require("express");

const router = express.Router();

const { addReply, deleteReply } = require("../controllers/replyController");
const { protect } = require("../middleware/authMiddleware");

const { validateReplies } = require("../middleware/validationMiddleware");

router.post("/:answerId/replies", protect, validateReplies, addReply); // Add a reply to an answer
router.delete("/:replyId", protect, deleteReply); // Delete a reply

module.exports = router;
