var express = require('express');
var router = express.Router();

/* GET studyCafes page. */
router.get('/', function(req, res, next) {
  res.render('studyCafes', { title: 'Express' });
});

module.exports = router;
