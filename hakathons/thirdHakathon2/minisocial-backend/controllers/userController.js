const User = require("../models/User");
const Post = require("../models/Post");

const displayUsers = async (req, res, next) => {
  try {
    // Fetch users with limited fields and paginated results
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 users per page
    const skip = (page - 1) * limit;

    const users = await User.find()
      .select("name email createdAt role") // Only return necessary fields
      .skip(skip)
      .limit(limit);

    const totalUsers = await User.countDocuments(); // Total count for pagination metadata

    res.status(200).json({
      users,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalUsers / limit),
        totalUsers,
      },
    });
  } catch (error) {
    next(error);
  }
};

const displayUserById = async (req, res, next) => {
  if (req.params.id !== req.user._id.toString()) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  try {
    const user = await User.findById(req.params.id)
      .select("-password")
      .populate({
        path: "posts",
      });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;

    //If the role is admin, they can delete any user
    if (req.user.role !== "admin" && userId !== req.user._id.toString()) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    //Delete the usre
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    // Delete all posts by user
    await Post.deleteMany({ author: userId });

    //Remove the user from likes in other posts
    await Post.updateMany(
      { "likes.user": userId },
      { $pull: { likes: { author: userId } } }
    );

    await user.deleteOne();

    //Respond with success
    res
      .status(200)
      .json({ message: "User and all the associate posts and likes deleted!" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  displayUsers,
  deleteUser,
  displayUserById,
};
