const routes = require('../modules/index');

const routesConfig = (app) => {
  app.use('/api/v1/auth', routes.auth.AuthRoutes);
  app.use('/api/v1/users', routes.users.UserRoutes);
};

module.exports = routesConfig;
