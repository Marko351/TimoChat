const morgan = require('morgan');
const bodyParser = require('body-parser');

const middlewareConfig = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('dev'));
};

module.exports = middlewareConfig;
