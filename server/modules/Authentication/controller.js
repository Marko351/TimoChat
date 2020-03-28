const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { Users } = require('../Users/index');
const asyncHandler = require('../../helpers/asyncHandler');
const ErrorResponse = require('../../helpers/errorResponse');
const sendJwtToken = require('../../helpers/sendJwtToken');

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Encrypt password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = new Users({ email, username, hashedPassword });
  const savedUser = await user.save();

  // send token
  sendJwtToken(savedUser, res, jwt);
});

const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email && !password) {
    return next(
      new ErrorResponse('Please provide email and password', 422, true)
    );
  }

  const user = await Users.findOne({ email });

  if (!user) {
    return next(new ErrorResponse('Invalid Credentials', 401, true));
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid Credentials', 401, true));
  }

  // send token
  sendJwtToken(user, res, jwt);
});

const isAuthenticated = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.userData = decoded;
  next();
});

module.exports = { registerUser, loginUser };
