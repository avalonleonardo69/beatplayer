const express = require('express');
const router = express.Router();

// GET auth sign in page
router.get('/', function (req, res) { res.render('auth/sign-in'); });
// GET auth sign up page
router.get('/sign-up', function (req, res) { res.render('auth/sign-up'); });

module.exports = router;
