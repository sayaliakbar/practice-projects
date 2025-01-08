const mongoose = require("mongoose");

const TagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tag", TagSchema);
