const jwt = require('jsonwebtoken');
const asyncHandler = require('../helpers/asyncHandler');

const isAuthenticated = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.userData = decoded;
  next();
});

module.exports = isAuthenticated;
