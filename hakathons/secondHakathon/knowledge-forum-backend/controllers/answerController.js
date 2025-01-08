const Answer = require("../models/Answer");
const Question = require("../models/Question");

const { CustomError } = require("../middleware/errorMiddleware");

// Add an answer to a question
const addAnswer = async (req, res, next) => {
  const { content } = req.body;
  const { questionId } = req.params;

  try {
    const question = await Question.findById(questionId);
    if (!question)
      throw new CustomError(`Question with id ${questionId} not found`, 404);

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
    next(error);
  }
};

module.exports = { addAnswer };
