const morgan = require('morgan');

const middlewareConfig = (app) => {
  app.use(morgan('dev'));
};

module.exports = middlewareConfig;
