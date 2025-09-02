// server.js
const express = require("express");
const app = express();
const port = 3000;

// default state
let redirectUrl = "none";

// endpoint the clients will poll
app.get("/killswitch", (req, res) => {
  res.send(redirectUrl);
});

// endpoint for you (admin) to set the redirect
app.get("/set", (req, res) => {
  const url = req.query.url;
  if (url) {
    redirectUrl = url;
    res.send(`Killswitch activated. Redirecting users to: ${url}`);
  } else {
    redirectUrl = "none";
    res.send("Killswitch deactivated. Returning 'none'.");
  }
});

app.listen(port, () => {
  console.log(`Killswitch server running at http://localhost:${port}`);
});
