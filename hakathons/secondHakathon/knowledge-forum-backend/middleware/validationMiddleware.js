const { body, validationResult } = require("express-validator");

// Validate Question Data
const validateQuestion = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description")
    .isLength({ max: 500 })
    .withMessage("Description too long")
    .notEmpty()
    .withMessage("Description is required"),
  body("tags").notEmpty().withMessage("Tags are required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateAnswer = [
  body("content").notEmpty().withMessage("Content is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateReplies = [
  body("content").notEmpty().withMessage("Reply is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateRegister = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email")
    .isEmail()
    .withMessage("Email is required")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .withMessage("Email format is invalid")
    .normalizeEmail()
    .isLength({ max: 50 })
    .withMessage("Email is too long"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .notEmpty()
    .withMessage("Password is required")
    .isAlphanumeric()
    .withMessage("Password must be alphanumeric")
    .isLength({ max: 20 })
    .withMessage("Password is too long"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateLogin = [
  body("email")
    .isEmail()
    .withMessage("Email is required")
    .normalizeEmail()
    .isLength({ max: 50 })
    .withMessage("Email is too long")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .withMessage("Email format is invalid"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .notEmpty()
    .withMessage("Password is required")
    .isAlphanumeric()
    .withMessage("Password must be alphanumeric")
    .isLength({ max: 20 })
    .withMessage("Password is too long"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

validateTags = [
  body("name")
    .notEmpty()
    .withMessage("Tag name is required")
    .isLength({ min: 3 })
    .withMessage(" Tag name must be greater then 3 ")
    .isLength({ max: 20 })
    .withMessage("Tag name must be less then 20"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  validateQuestion,
  validateRegister,
  validateAnswer,
  validateReplies,
  validateLogin,
  validateTags,
};
