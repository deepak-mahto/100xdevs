const jwt = require("jsonwebtoken");
const JWT_SECRET = "deepak123@gmail";

function auth(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData) {
    req.userId = decodedData._id;
    next();
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
}

module.exports = {
  auth,
  JWT_SECRET,
};
