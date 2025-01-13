const Reply = require("../models/Reply");
const Answer = require("../models/Answer");

const { CustomError } = require("../middleware/errorMiddleware");

// Add a reply to an answer
const addReply = async (req, res, next) => {
  const { answerId } = req.params;
  const { content } = req.body;

  try {
    const answer = await Answer.findById(answerId);

    if (!answer) {
      throw new CustomError(`Answer with id ${answerId} not found`, 404);
    }

    // Create a new reply
    const reply = await Reply.create({
      content,
      answer: answerId,
      author: req.user._id, // Assuming req.user contains the current authenticated user
    });

    answer.replies.push(reply._id);
    await answer.save();
    const populatedReply = await Reply.findById(reply._id).populate(
      "author",
      "name email" // Specify fields to include from the author (e.g., name, email)
    );

    res.status(201).json(populatedReply);
  } catch (error) {
    next(error);
  }
};
const deleteReply = async (req, res, next) => {
  const { replyId } = req.params;

  try {
    const reply = await Reply.findById(replyId);

    if (!reply)
      throw new CustomError(`Reply with id ${replyId} not found`, 404);

    await reply.deleteOne();

    res.json({ message: "Reply deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = { addReply, deleteReply };
