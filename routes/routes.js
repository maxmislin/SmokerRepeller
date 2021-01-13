const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/api', controllers.api);

module.exports = router;