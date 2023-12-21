const express = require('express');
const router = express.Router();
const driversService = require('../services/drivers')


router.get('/', driversService.getAll);
router.get('/getAvailable', driversService.getAvailable);


module.exports = router;