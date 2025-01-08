const Question = require("../models/Question");
const { CustomError } = require("../middleware/errorMiddleware");

const createQuestion = async (req, res, next) => {
  const { title, description, tags } = req.body;
  try {
    const question = await Question.create({
      title,
      description,
      tags,
      author: req.user._id,
    });
    res.status(201).json(question);
  } catch (error) {
    next(error);
  }
};

const getQuestions = async (req, res, next) => {
  try {
    const questions = await Question.find().populate("answers", "tags");
    res.json(questions);
  } catch (error) {
    next(error);
  }
};

const getQuestionById = async (req, res, next) => {
  try {
    const question = await Question.findById(req.params.id).populate("answers");
    if (!question) throw new CustomError(`Question not found`, 404);
    res.json(question);
  } catch (error) {
    next(error);
  }
};

const deleteQuestionById = async (req, res, next) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question)
      throw new CustomError(`Question with id ${req.params.id} not found`, 404);
    res.json({ message: "Question deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createQuestion,
  getQuestions,
  getQuestionById,
  deleteQuestionById,
};
