const jwt = require("jsonwebtoken");
const User = require("../models/User");

const isAdmin = async (req, res, next) => {
  try {
    // Extract token from Authorization header
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user by ID
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the user has the "admin" role
    if (user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Access denied, admin rights required" });
    }

    // Attach the user to the request object for future use
    req.user = user;
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    // Handle different types of JWT errors
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired" });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }

    console.error("Error checking admin rights:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = isAdmin;
