const Post = require("../models/Post");
const User = require("../models/User");

const getPosts = async (req, res) => {
  const posts = await Post.find().populate("author", "name");
  res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id)
    .populate("author", "name")
    .populate("likes", "name");
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  return res.status(200).json(post);
};

const createPost = async (req, res) => {
  if (!req.user) {
    return res
      .status(401)
      .json({ message: "You are not authorized to create a post" });
  }
  const post = new Post({
    content: req.body.content,
    author: req.user._id,
  });

  const user = await User.findById(req.user._id);
  user.posts.push(post._id);
  await user.save();

  const createdPost = await post.save();
  res.status(201).json(createdPost);
};

const updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(404).json({ message: "Post not found" });
  }
  if (post.author.toString() !== req.user._id.toString()) {
    res
      .status(401)
      .json({ message: "You are not authorized to update this post" });
  }
  post.content = req.body.content;
  const updatedPost = await post.save();
  res.status(200).json(updatedPost);
};

const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(404).json({ message: "Post not found" });
  }
  if (post.author.toString() !== req.user._id.toString()) {
    res
      .status(401)
      .json({ message: "You are not authorized to create a post" });
  }

  await post.deleteOne();
  res.status(200).json({ message: "Post removed" });
};

const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (!post.likes.includes(req.user._id)) {
      if (req.user && req.user._id) {
        post.likes.push(req.user._id);
      } else {
        return res.status(401).json({ message: "User not authenticated" });
      }
      await post.save();
      return res.status(200).json({ message: "Post liked", post });
    } else {
      post.likes = post.likes.filter(
        (like) => like.toString() !== req.user._id.toString()
      );
      await post.save();
      return res.status(200).json({ message: "Post unliked", post });
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  likePost,
};
