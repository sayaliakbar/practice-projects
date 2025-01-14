const { body, validationResult } = require("express-validator");

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

validatePost = [
  body("content")
    .isLength({ min: 1 })
    .withMessage("Post text is required")
    .isLength({ max: 500 })
    .withMessage("Post text is too long"),
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
