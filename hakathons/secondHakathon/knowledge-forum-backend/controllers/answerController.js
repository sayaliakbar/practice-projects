const Answer = require("../models/Answer");
const Question = require("../models/Question");

// Add an answer to a question
const addAnswer = async (req, res) => {
  const { content } = req.body;
  const { questionId } = req.params;

  try {
    const question = await Question.findById(questionId);
    if (!question)
      return res.status(404).json({ message: "Question not found" });

    // Create a new answer
    const answer = await Answer.create({
      content,
      question: questionId,
      author: req.user._id, // Assuming req.user contains the current authenticated user
    });

    // Add the answer to the question's answers array
    question.answers.push(answer._id);
    await question.save();

    res.status(201).json(answer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addAnswer };
