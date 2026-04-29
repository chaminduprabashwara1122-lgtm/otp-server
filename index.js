const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OTP Server</title>
      </head>
      <body style="display:flex;justify-content:center;align-items:center;height:100vh;margin:0;font-family:sans-serif;">
        <h1>🚀 OTP Server Running</h1>
      </body>
    </html>
  `);
});

// Subscribe form (GET)
app.get("/subscribe", (req, res) => {
  res.send(`
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Subscribe</title>
      </head>
      <body style="display:flex;justify-content:center;align-items:center;height:100vh;margin:0;font-family:sans-serif;background:#f5f5f5;">
        <div style="text-align:center;">
          <h2 style="font-size:26px;">📱 Enter Your Number</h2>
          <form method="POST" action="/subscribe">
            <input 
              name="number" 
              placeholder="0771234567" 
              required 
              style="padding:12px;font-size:18px;width:200px;"
            />
            <br><br>
            <button style="padding:12px 25px;font-size:18px;">Subscribe</button>
          </form>
        </div>
      </body>
    </html>
  `);
});

// Handle form (POST)
app.post("/subscribe", (req, res) => {
  const { number } = req.body;

  if (!number) {
    return res.send("❌ Number required");
  }

  res.send(`
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Success</title>
      </head>
      <body style="display:flex;justify-content:center;align-items:center;height:100vh;margin:0;font-family:sans-serif;background:#f5f5f5;">
        <div style="text-align:center;">
          <h1 style="font-size:28px;">✅ Subscribed Successfully</h1>
          <p style="font-size:20px;">Number: <b>${number}</b></p>
        </div>
      </body>
    </html>
  `);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
