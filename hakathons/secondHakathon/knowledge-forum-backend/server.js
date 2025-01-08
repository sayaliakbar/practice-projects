const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");
connectDB();

const app = express();
app.use(express.json());

app.use("/api/questions", require("./routes/questionRoutes"));
app.use("/api/answers", require("./routes/answerRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tags", require("./routes/tagRoutes"));

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
