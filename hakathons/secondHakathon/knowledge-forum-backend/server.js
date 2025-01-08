const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const connectDB = require("./config/db");
connectDB();

const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();
app.use(express.json());

app.use("/api/questions", require("./routes/questionRoutes"));
app.use("/api/answers", require("./routes/answerRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tags", require("./routes/tagRoutes"));

app.use(errorHandler);
PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
