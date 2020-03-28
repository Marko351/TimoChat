const { Router } = require('express');

const { registerUser, loginUser } = require('./controller');

const router = new Router();

router.post('/register', registerUser);
router.get('/login', loginUser);

module.exports = router;
