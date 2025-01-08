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
    console.log(tag);
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

module.exports = { createTag, getAllTags };
