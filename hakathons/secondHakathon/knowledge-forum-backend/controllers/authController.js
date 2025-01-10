const User = require("../models/User");
const jwt = require("jsonwebtoken");
const Question = require("../models/Question");
const Answer = require("../models/Answer");
const Reply = require("../models/Reply");

const { CustomError } = require("../middleware/errorMiddleware");

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Register a new user
const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new CustomError("User already exists", 400);
    }

    const user = await User.create({ name, email, password });

    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    next(error);
  }
};

// Login an existing user
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.comparePassword(password))) {
      res.status(200).json({
        id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      throw new CustomError("Invalid email or password", 401);
    }
  } catch (error) {
    next(error);
  }
};

const displayUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      throw new CustomError(`User with id ${req.params.id} not found`, 404);
    }

    // Delete all questions, answers, and replies of the user
    await Question.deleteMany({ author: req.params.id });
    await Answer.deleteMany({ author: req.params.id });
    await Reply.deleteMany({ author: req.params.id });

    res.status(200).json({ message: "User and associated content removed" });
  } catch (error) {
    next(error);
  }
};

module.exports = { registerUser, loginUser, displayUsers, deleteUser };
