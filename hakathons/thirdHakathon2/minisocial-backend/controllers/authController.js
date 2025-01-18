const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Generate JWT Token
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Register a new user
const registerUser = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ message: "User already exists!" });
    }
    // If the role is not provided, default to 'user'
    const userRole = role || "user"; // Only "admin" should be passed from the backend or controlled in the frontend

    // Create a new user
    const user = await User.create({ name, email, password, role: userRole });

    // Respond with user info and token
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id, userRole), // Ensure `generateToken` is implemented correctly
    });
  } catch (error) {
    console.error("Error during registration:", error.message);
    next(error); // Pass the error to the error handling middleware
  }
};

// Login an existing user
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Fetch the user and ensure the password is included if it is excluded by default
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" }); //Not revealing whether the user exists for security
    }

    // Check if the password matches
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Successful login, return user data and token
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      posts: user.posts,
      role: user.role, // Include the role in the response (optional)
      token: generateToken(user._id, user.role), // Include role in the JWT
    });
  } catch (error) {
    console.error("Error during login:", error.message); // Log error for debugging
    next(error); // Pass the error to the global error handler
  }
};

module.exports = {
  registerUser,
  loginUser,
};
