const Tag = require("../models/Tags");

// Create a new tag
const createTag = async (req, res) => {
  let { name } = req.body;
  name = name.toLowerCase();

  try {
    const existingTag = await Tag.findOne({ name });

    if (existingTag)
      return res.status(400).json({ message: "Tag already exists" });

    const tag = await Tag.create({ name });

    res.status(201).json(tag);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all tags
const getAllTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.json(tags);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTag = async (req, res) => {
  try {
    const tag = await Tag.findByIdAndDelete(req.params.id);
    if (!tag) return res.status(404).json({ message: "Tag not found" });

    res.json({ message: "Tag deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTag, getAllTags, deleteTag };
