var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cats', { title: 'search results for Cats' });
});

module.exports = router;