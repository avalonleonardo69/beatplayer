const express = require('express');
const router = express.Router();

// GET homepage
router.get('/', function (req, res) { res.render('index'); });

module.exports = router;
