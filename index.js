//eslint-disable-next-line
require('dotenv').config({ path: `./.env.${process.env.APP_ENV}` });
require('./server');
