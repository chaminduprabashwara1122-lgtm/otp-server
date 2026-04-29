const express = require("express");
const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>OTP Server</title>
      </head>
      <body style="text-align:center; margin-top:50px; font-family:sans-serif;">
        <h1>🚀 OTP Server Running</h1>
        <p>Server is working perfectly</p>
      </body>
    </html>
  `);
});

// Subscribe route
app.get("/subscribe", (req, res) => {
  res.send(`
    <html>
      <body style="text-align:center; margin-top:50px;">
        <h2>✅ Subscription Successful</h2>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
