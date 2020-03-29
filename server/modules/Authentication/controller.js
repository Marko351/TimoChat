const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Joi = require('@hapi/joi');

const { Users } = require('../Users/index');
const asyncHandler = require('../../helpers/asyncHandler');
const sendJwtToken = require('../../helpers/sendJwtToken');
const {
  sendFormattedErrors,
  errorResponse,
} = require('../../helpers/sendFormattedErrors');

//////// REGISTER USER //////////
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const isExists = await Users.findOne({ email });
  if (isExists) {
    return errorResponse(
      { path: 'email', message: 'User with that email already created' },
      res,
      422
    );
  }

  // Encrypt password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = new Users({ email, username, password: hashedPassword });
  const savedUser = await user.save();

  // send token
  sendJwtToken(savedUser, res, jwt);
});

///////// LOGIN USER ////////////
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email });

  if (!user) {
    return errorResponse(
      { path: 'email', message: 'There is no user with that email' },
      res,
      422
    );
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return errorResponse(
      { path: 'password', message: 'Invalid password' },
      res,
      422
    );
  }

  // send token
  sendJwtToken(user, res, jwt);
});

//////// VALIDATE USER DATA ///////////
const validateUser = asyncHandler((req, res, next) => {
  const schema = new Joi.object().options({ abortEarly: false }).keys({
    username: Joi.string().min(2).max(30).allow(null),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().min(6).required(),
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return sendFormattedErrors(validationResult.error.details, res);
  } else {
    return next();
  }
});

module.exports = { registerUser, loginUser, validateUser };
