const Reply = require("../models/Reply");
const Answer = require("../models/Answer");

// Add a reply to an answer
const addReply = async (req, res) => {
  const { answerId } = req.params;
  const { content } = req.body;

  try {
    const answer = await Answer.findById(answerId);

    if (!answer) return res.status(404).json({ message: "Answer not found" });

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
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addReply };
