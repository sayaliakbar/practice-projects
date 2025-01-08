const Answer = require("../models/Answer");
const Question = require("../models/Question");

// Add an answer to a question
const addAnswer = async (req, res) => {
  const { content, author } = req.body;
  const { questionId } = req.params;

  try {
    const question = await Question.findById(questionId);
    if (!question)
      return res.status(404).json({ message: "Question not found" });

    // Create a new answer
    const answer = await Answer.create({
      content,
      question: questionId,
      author,
    });

    // Add the answer to the question's answers array
    question.answers.push(answer._id);
    await question.save();

    res.status(201).json(answer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a reply to an answer
const addReply = async (req, res) => {
  const { answerId } = req.params;
  const { reply } = req.body;

  try {
    const answer = await Answer.findById(answerId);
    if (!answer) return res.status(404).json({ message: "Answer not found" });

    // Add the reply to the answer's replies array
    answer.replies.push(reply);
    await answer.save();

    res.status(201).json({ message: "Reply added", answer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addAnswer, addReply };
