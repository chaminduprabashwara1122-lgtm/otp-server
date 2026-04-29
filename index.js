const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
app.get("/", (req, res) => {
  res.send("🚀 OTP Server Running");
});

// 👉 GET /subscribe (browser එකෙන් open කරනකොට)
app.get("/subscribe", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Subscribe</title>
      </head>
      <body style="text-align:center; margin-top:50px; font-family:sans-serif;">
        <h2>📱 Enter Your Number</h2>
        <form method="POST" action="/subscribe">
          <input name="number" placeholder="0771234567" required style="padding:10px; font-size:16px;" />
          <br><br>
          <button type="submit" style="padding:10px 20px; font-size:16px;">Subscribe</button>
        </form>
      </body>
    </html>
  `);
});

// 👉 POST /subscribe (form submit වෙනකොට)
app.post("/subscribe", (req, res) => {
  const { number } = req.body;

  if (!number) {
    return res.send("❌ Number required");
  }

  res.send(`
    <html>
      <body style="text-align:center; margin-top:50px; font-family:sans-serif;">
        <h2>✅ Subscribed Successfully</h2>
        <p>Number: ${number}</p>
      </body>
    </html>
  `);
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
