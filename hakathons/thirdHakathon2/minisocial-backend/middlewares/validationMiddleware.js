const { body, validationResult } = require("express-validator");

const validateRegister = [
  // Validate name
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long")
    .isLength({ max: 30 })
    .withMessage("Name must not exceed 30 characters"),

  // Validate email
  body("email")
    .isEmail()
    .withMessage("Invalid email format") // Automatically checks for valid email format
    .normalizeEmail()
    .isLength({ max: 50 })
    .withMessage("Email must not exclude 50 characters"),

  // Validate password
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .isLength({ max: 50 })
    .withMessage("Password must not exceed 50 characters")
    .matches(/^[A-Za-z0-9@#$%^&+=!]+$/)
    .withMessage(
      "Password must be alphanumeric and may include special characters like @, #, $, %, ^, &, +, =, !"
    ),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array().map((error) => ({
          field: error.param,
          message: error.msg,
        })),
      });
    }
    next();
  },
];

const validateLogin = [
  body("email")
    .isEmail()
    .withMessage("Invalid email format") // Step 1: Verify email format
    .normalizeEmail() // Step 2: Sanitize and standardize
    .isLength({ max: 50 })
    .withMessage("Email must not exceed 50 characters"), // Step 3: Prevent excessively long input

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .isLength({ max: 50 })
    .withMessage("Password must not exceed 50 characters")
    .matches(/^[A-Za-z0-9@#$%^&+=!]+$/)
    .withMessage(
      "Password must be alphanumeric and may include special characters like @, #, $, %, ^, &, +, =, !"
    ),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array().map((error) => ({
          field: error.param,
          message: error.msg,
        })),
      });
    }
    next();
  },
];

const validatePost = [
  body("content")
    .trim() // Remove whitespace from the beginning and end of the input
    .notEmpty()
    .withMessage("Content is required")
    .isLength({ max: 500 })
    .withMessage("Text is too long, maximum 500 characters"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  validateRegister,
  validateLogin,
  validatePost,
};
