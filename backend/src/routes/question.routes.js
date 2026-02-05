const express = require("express");
const router = express.Router();

const { askQuestion } = require("../controllers/question.controller");

// TEMP test route
router.get("/questions", (req, res) => {
  res.json({ message: "Questions API is reachable" });
});

router.post("/questions", askQuestion);

module.exports = router;
