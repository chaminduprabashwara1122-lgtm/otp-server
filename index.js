const express = require("express");
const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("OTP Server Running 🚀");
});

// Subscription URL
app.get("/subscribe", (req, res) => {
  res.send("Subscription successful");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
