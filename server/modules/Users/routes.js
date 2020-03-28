const express = require('express');

const controllerMethods = require('./controller');

const router = express.Router();

router.get('/:userId', controllerMethods.getUser);

module.exports = router;
