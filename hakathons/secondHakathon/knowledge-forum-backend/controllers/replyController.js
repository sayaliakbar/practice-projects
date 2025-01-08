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

    res.status(201).json(reply);
  } catch (error) {
    next(error);
  }
};

module.exports = { addReply };
