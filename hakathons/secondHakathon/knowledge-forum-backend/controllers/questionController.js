const Question = require("../models/Question");
const Answer = require("../models/Answer");
const Reply = require("../models/Reply");
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
  const {
    search,
    tags,
    page = 1,
    limit = 10,
    sortBy = "createdAt",
    order = "desc",
  } = req.query;

  let filter = {};

  // Filter by search keyword in title or description
  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }

  // Filter by tags (if provided as a comma-separated string)
  if (tags) {
    const tagArray = tags.split(",");
    filter.tags = { $in: tagArray };
  }

  const skip = (page - 1) * limit; // Calculate documents to skip
  const sortOrder = order === "asc" ? 1 : -1; // Set sorting order

  try {
    const questions = await Question.find(filter)
      .populate("author", "name") // Populate author's name and email
      .populate("tags", "name")
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder });
    const totalQuestions = await Question.countDocuments(filter); // Total count for pagination
    res.json({
      success: true,
      questions,
      currentPage: Number(page),
      totalPages: Math.ceil(totalQuestions / limit),
    });
  } catch (error) {
    next(error);
  }
};

const getQuestionById = async (req, res, next) => {
  try {
    const question = await Question.findById(req.params.id)
      .lean()
      .populate([
        {
          path: "answers",
          populate: [
            { path: "author", select: "name" },
            { path: "replies", populate: { path: "author", select: "name" } },
          ],
        },
        { path: "tags", select: "name" },
        { path: "author", select: "name" },
      ]);

    if (!question) throw new CustomError(`Question not found`, 404);

    res.json(question);
  } catch (error) {
    next(error);
  }
};

const deleteQuestionById = async (req, res, next) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question)
      throw new CustomError(`Question with id ${req.params.id} not found`, 404);

    // Manually delete related answers before deleting the question
    await Answer.deleteMany({ question: question._id });
    await Reply.deleteMany({ question: question._id });

    // Now delete the question
    await question.deleteOne();

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
