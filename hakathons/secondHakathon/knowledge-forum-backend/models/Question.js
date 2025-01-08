const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Answer" }],
    author: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", QuestionSchema);
