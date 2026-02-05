require("dotenv").config();
console.log("OPENAI KEY PRESENT:", !!process.env.OPENAI_API_KEY);

const express = require("express");
const cors = require("cors");

const questionRoutes = require("./routes/question.routes");

const app = express();
const PORT = 5000;

app.use(cors());         
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "Student Knowledge Assistant API running" });
});

app.use("/api", questionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
