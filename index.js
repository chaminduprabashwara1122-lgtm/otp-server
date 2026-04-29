const express = require("express");
const app = express();

app.use(express.json());

// Store users (temporary - no DB yet)
let users = [];

// Home
app.get("/", (req, res) => {
  res.send("🚀 OTP Server Running");
});

// Subscribe
app.post("/subscribe", (req, res) => {
  const { number } = req.body;

  if (!number) {
    return res.send("❌ Number required");
  }

  users.push({ number });
  res.send("✅ Subscribed: " + number);
});

// Send OTP
app.post("/send-otp", (req, res) => {
  const { number } = req.body;

  if (!number) {
    return res.send("❌ Number required");
  }

  const otp = Math.floor(1000 + Math.random() * 9000);

  console.log(`OTP for ${number}: ${otp}`);

  res.send("📩 OTP sent");
});

// Verify OTP
app.post("/verify-otp", (req, res) => {
  const { otp } = req.body;

  if (!otp) {
    return res.send("❌ OTP required");
  }

  res.send("✅ OTP Verified (demo)");
});

// View users
app.get("/users", (req, res) => {
  res.json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
