const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
    replies: { type: [mongoose.Schema.Types.ObjectId], ref: "Reply" },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Answer", AnswerSchema);
