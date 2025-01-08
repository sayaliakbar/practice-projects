const Tag = require("../models/Tags");
const { CustomError } = require("../middleware/errorMiddleware");

// Create a new tag
const createTag = async (req, res, next) => {
  let { name } = req.body;
  name = name.toLowerCase();

  try {
    const existingTag = await Tag.findOne({ name });

    if (existingTag)
      throw new CustomError("Tag with this name already exists", 400);

    const tag = await Tag.create({ name });

    res.status(201).json(tag);
  } catch (error) {
    next(error);
  }
};

// Get all tags
const getAllTags = async (req, res, next) => {
  try {
    const tags = await Tag.find();
    res.json(tags);
  } catch (error) {
    next(error);
  }
};

const deleteTag = async (req, res, next) => {
  try {
    const tag = await Tag.findByIdAndDelete(req.params.id);
    if (!tag) {
      throw new CustomError(`Tag with id ${req.params.id} not found`, 404);
    }

    res.json({ message: "Tag deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = { createTag, getAllTags, deleteTag };
