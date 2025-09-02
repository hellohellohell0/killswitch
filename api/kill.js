let redirectUrl = "none"; // default state

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow frontend to call
  res.status(200).send(redirectUrl);
}
