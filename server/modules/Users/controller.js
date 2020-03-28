const Users = require('./model');

const getUser = async (req, res, next) => {
  try {
    const user = await Users.findOne({ _id: req.params.userId });

    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};

module.exports = { getUser };
