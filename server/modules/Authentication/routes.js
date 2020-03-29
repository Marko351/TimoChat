const { Router } = require('express');

const { registerUser, loginUser, validateUser } = require('./controller');

const router = new Router();

router.post('/register', validateUser, registerUser);
router.post('/login', validateUser, loginUser);

module.exports = router;
