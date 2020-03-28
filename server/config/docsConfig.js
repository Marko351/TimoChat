const swagger = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const docsConfig = (app) => {
  app.use('/docs', swagger.serve, swagger.setup(swaggerDocument));
};

module.exports = docsConfig;
