// /api/kill.js
export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).send("https://google.com"); // your redirect URL
}
