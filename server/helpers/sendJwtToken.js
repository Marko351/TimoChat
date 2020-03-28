const sendJwtToken = (user, res, jwt) => {
  const token = jwt.sign(
    {
      userId: user._id,
      email: user.email,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1 day' }
  );

  return res.status(200).json({ success: true, token });
};

module.exports = sendJwtToken;
