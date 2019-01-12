
const express = require('express');
const router = express.Router();
const test = require('../pages/test');
const home = require('../pages/home');

router.use('/', home);
router.use('/test', test);

//router.use(logErrors);
//router.use(redirectToErrorPages);

module.exports = router;
