const env = require("dotenv");
const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "no token authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.secret);
    if (decoded) {
      next();
    }
  } catch (error) {
    res.status(401).json({ msg: "token is not valid" });
  }
};
module.exports = auth;
