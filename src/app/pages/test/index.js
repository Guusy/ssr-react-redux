const express = require('express');
const router = express.Router();
const controller = require('./controller')


router.get('', controller.getDataSwapi,controller.renderTest); 


module.exports = router;