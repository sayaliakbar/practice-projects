const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("../config/db");
const { errorHandler } = require("../middleware/errorMiddleware");
const cors = require("cors");

// Allow requests from the frontend

dotenv.config();
connectDB();

const app = express();

// Use Morgan for logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); // Detailed logs for development
} else {
  app.use(morgan("combined")); // Standard logs for production
}

if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
  throw new Error("MONGO_URI and JWT_SECRET must be provided in .env file");
}

app.use(express.json());

app.use("/api/questions", require("../routes/questionRoutes"));
app.use("/api/answers", require("../routes/answerRoutes"));
app.use("/api/auth", require("../routes/authRoutes"));
app.use("/api/tags", require("../routes/tagRoutes"));
app.use(cors());

app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend during development
  })
);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(errorHandler);

PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
