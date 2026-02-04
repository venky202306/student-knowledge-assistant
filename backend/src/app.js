const express = require("express");

const app = express();
const PORT = 5000;

app.get("/health", (req, res) => {
    res.json({ status: "Student Knowledge Assistant API running" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
