const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("../config/db");
const { errorHandler } = require("../middlewares/errorMiddleware");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

// Use Morgan for logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
  throw new Error("MONGO_URI and JWT_SECRET must be provided in .env file");
}

app.use(express.json());

//Enable CORS before defining routes
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Development origin
      // "https://knowledge-forum-frontend.vercel.app", // Production frontend
    ],
    credentials: true,
  })
);

// Define API routes

app.use("/api/auth", require("../routes/authRoutes"));
app.use("/api/users", require("../routes/userRoutes"));
app.use("/api/posts", require("../routes/postRoutes"));

app.get("/", (req, res) => {
  res.redirect("/api/posts");
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
