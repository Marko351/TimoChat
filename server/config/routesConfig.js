const routes = require('../modules/index');
const isAuth = require('../middlewares/is-auth');

const routesConfig = (app) => {
  app.use('/api/v1/auth', routes.auth.AuthRoutes);
  app.use('/api/v1/users', isAuth, routes.users.UserRoutes);
};

module.exports = routesConfig;
