const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
    posts: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
      default: [],
    },
    role: {
      type: String,
      enum: ["user", "admin"], // Flexible for future roles
      default: "user",
      required: true,
    },
  },

  { timestamps: true }
);

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Skip if password isn't modified
  if (!this.password) return next(new Error("Password is required")); // Handle empty passwords
  this.password = await bcrypt.hash(this.password, 10); // Hash the password
  next();
});

// Compare passwords
UserSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.error("Error comparing passwords:", error);
    throw new Error("Password comparison failed");
  }
};

module.exports = mongoose.model("User", UserSchema);
