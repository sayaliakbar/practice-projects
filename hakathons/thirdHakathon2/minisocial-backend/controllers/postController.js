const Post = require("../models/Post");
const User = require("../models/User");

const getPosts = async (req, res) => {
  try {
    // Destructure and provide default values for query parameters
    let {
      page = 1,
      limit = 10,
      search = "",
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query;

    // Convert page and limit to integers
    page = parseInt(page);
    limit = parseInt(limit);

    // Validate page and limit to ensure they're positive integers
    if (page <= 0 || limit <= 0) {
      return res
        .status(400)
        .json({ message: "Page and limit must be positive integers" });
    }

    // Validate sortOrder: should be either 'asc' or 'desc'
    const order = sortOrder === "asc" ? 1 : sortOrder === "desc" ? -1 : null;
    if (order === null) {
      return res
        .status(400)
        .json({ message: "sortOrder must be either 'asc' or 'desc'" });
    }

    // Validate sortBy field - only allow certain fields to be used for sorting
    const validSortFields = ["createdAt", "content", "author"];
    if (!validSortFields.includes(sortBy)) {
      return res.status(400).json({
        message: `sortBy must be one of the following: ${validSortFields.join(
          ", "
        )}`,
      });
    }

    // Build the search query if there's a search term
    const searchQuery = search
      ? {
          $or: [
            { title: { $regex: search, $options: "i" } }, // Case insensitive search in title
            { content: { $regex: search, $options: "i" } }, // Case insensitive search in content
          ],
        }
      : {};

    // Fetch the posts with pagination, search, and sorting
    const posts = await Post.find(searchQuery)
      .populate("author", "name")
      .populate("likes", "name")
      .sort({ [sortBy]: order }) // Sort by the field specified in `sortBy` (default: `createdAt`)
      .skip((page - 1) * limit) // Skip records for pagination
      .limit(limit); // Limit the number of records per page

    // Get the total count of posts for pagination metadata
    const totalPosts = await Post.countDocuments(searchQuery);

    // Send the response with pagination metadata
    res.status(200).json({
      posts,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalPosts / limit),
        totalPosts,
      },
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Server error" });
  }
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

const getPostsByUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const posts = await Post.find({ author: user._id })
      .populate("author", "name")
      .populate("likes", "name");

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Server error" });
  }
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
  if (
    req.user.role !== "admin" &&
    post.author.toString() !== req.user._id.toString()
  ) {
    return res
      .status(403)
      .json({ message: "You are not authorized to delete this post" });
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
  getPostsByUser,
  createPost,
  updatePost,
  deletePost,
  likePost,
};
