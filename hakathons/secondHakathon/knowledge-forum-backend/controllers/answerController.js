const Answer = require("../models/Answer");
const Question = require("../models/Question");
const Reply = require("../models/Reply");

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
const deleteAnswer = async (req, res, next) => {
  const { answerId } = req.params;

  try {
    const answer = await Answer.findById(answerId);

    if (!answer)
      throw new CustomError(`Answer with id ${answerId} not found`, 404);

    // Find the associated question
    const question = await Question.findOne({ answers: answer._id });

    if (question) {
      // Remove the answer from the question's answers array
      question.answers = question.answers.filter(
        (answerId) => answerId.toString() !== answer._id.toString()
      );
      await question.save(); // Save the updated question
    }

    // Manually delete related answers before deleting the question
    await Reply.deleteMany({ answer: answer._id });

    // Now delete the question
    await answer.deleteOne();

    res.json({ message: "Answer deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = { addAnswer, deleteAnswer };
