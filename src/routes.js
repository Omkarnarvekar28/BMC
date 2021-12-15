const express = require('express');
const router = express.Router();
router.use('/', require('./routes/index.js'))





module.exports = router