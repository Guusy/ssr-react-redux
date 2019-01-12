const express = require('express');
const router = express.Router();
const controller = require('./controller')


router.get('', controller.getDataHome,controller.renderhome); 


module.exports = router;