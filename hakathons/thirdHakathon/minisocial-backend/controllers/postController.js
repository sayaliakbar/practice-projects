const Post = require("../models/Post");
const User = require("../models/User");

const getPosts = async (req, res) => {
  const posts = await Post.find().populate("user", "name");
  res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id).populate("user", "name");
  if (!post) {
    res.status(404).json({ message: "Post not found" });
  }
  res.status(200).json(post);
};

const createPost = async (req, res) => {
  if (!req.user) {
    res
      .status(401)
      .json({ message: "You are not authorized to create a post" });
  }
  const post = new Post({
    content: req.body.content,
    user: req.user._id,
  });
  const createdPost = await post.save();
  res.status(201).json(createdPost);
};

const updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(404).json({ message: "Post not found" });
  }
  if (post.user.toString() !== req.user._id.toString()) {
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
  if (post.user.toString() !== req.user._id.toString()) {
    res
      .status(401)
      .json({ message: "You are not authorized to create a post" });
  }

  await post.deleteOne();
  res.status(200).json({ message: "Post removed" });
};

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost };
