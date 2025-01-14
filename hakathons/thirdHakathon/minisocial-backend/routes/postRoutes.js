const express = require("express");
const { validatePost } = require("../middlewares/validationMiddleware");
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(getPosts).post(protect, validatePost, createPost);
router
  .route("/:id")
  .get(getPostById)
  .put(protect, validatePost, updatePost)
  .delete(protect, deletePost);

module.exports = router;
