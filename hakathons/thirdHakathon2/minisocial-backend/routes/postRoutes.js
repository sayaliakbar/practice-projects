const express = require("express");
const { validatePost } = require("../middlewares/validationMiddleware");
const {
  getPosts,
  getPostById,
  getPostsByUser,
  createPost,
  updatePost,
  deletePost,
  likePost,
} = require("../controllers/postController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(getPosts).post(protect, validatePost, createPost);
router.route("/:id/like").post(protect, likePost);
router
  .route("/:id")
  .get(getPostById)
  .put(protect, validatePost, updatePost)
  .delete(protect, deletePost);

router.route("/user/:id").get(protect, getPostsByUser);

module.exports = router;
