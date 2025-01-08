const jwt = require("jsonwebtoken");
const User = require("../models/User");

const { CustomError } = require("./errorMiddleware");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      throw new CustomError("Not authorized, token failed", 401);
    }
  } else {
    throw new CustomError("Not authorized, no token", 401);
  }
};

module.exports = { protect };
