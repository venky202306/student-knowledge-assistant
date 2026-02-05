const { getAIResponse } = require("../services/ai-response.service");

exports.askQuestion = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ answer: "Question is required" });
    }

    const answer = await getAIResponse(question);
    res.status(200).json({ answer });

  } catch (err) {
    console.error("AI ERROR:", err);
    res.status(500).json({ answer: "AI failed to respond" });
  }
};
