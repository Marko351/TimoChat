const sendFormattedErrors = (errors, res) => {
  const formattedErrors = errors.map((error) => {
    return { path: error.path[0], message: error.message };
  });

  return res.status(422).json(formattedErrors);
};

const errorResponse = (error, res, status) => {
  const formattedError = [{ path: error.path, message: error.message }];

  return res.status(status).json(formattedError);
};

module.exports = { sendFormattedErrors, errorResponse };
