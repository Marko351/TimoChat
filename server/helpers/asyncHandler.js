const asyncHandler = (fn) => {
  return (req, res, next) => {
    return new Promise((resolve) => {
      resolve(fn(req, res, next));
    }).catch(function (error) {
      return next(error);
    });
  };
};

module.exports = asyncHandler;
