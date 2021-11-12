var express = require('express');
const cats_controlers= require('../controllers/cats');
var router = express.Router();

router.get('/', cats_controlers.cats_view_all_Page );
module.exports = router;