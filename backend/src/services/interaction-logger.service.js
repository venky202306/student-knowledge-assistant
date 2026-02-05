exports.logInteraction = (question, answer) => {
  console.log("---- Student Knowledge Assistant Log ----");
  console.log("Question:", question);
  console.log("Answer:", answer);
  console.log("Timestamp:", new Date().toISOString());
  console.log("-----------------------------------------");
};
