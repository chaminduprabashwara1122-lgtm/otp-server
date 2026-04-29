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
