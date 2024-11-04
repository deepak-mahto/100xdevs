const jwt = require("jsonwebtoken");
const { JWT_USER_SECRET } = require("../config");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  const token = req.headers.token;

  if (!token) {
    res.status(403).json({
      message: "Token is missing",
    });
  }

  const decode = jwt.verify(token, JWT_USER_SECRET);

  if (decode) {
    req.userId = decode.id;
    next();
  } else {
    res.json({
      message: "You are not logged in",
    });
  }
}

module.exports = userMiddleware;
