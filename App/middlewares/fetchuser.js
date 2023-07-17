const jwt = require("jsonwebtoken");
const JWT_SECRET = "Sucrose";

const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res
      .status(400)
      .json({ error: "Please authenticate through a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    console.error(error.message);
    res.status(401).send("Internal Server Error");
  }
};

module.exports = fetchuser;
