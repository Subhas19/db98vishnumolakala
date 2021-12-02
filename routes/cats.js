var express = require('express');
const cats_controlers= require('../controllers/cats');
var router = express.Router();

router.get('/', cats_controlers.cats_view_all_Page );
/* GET detail costume page */ 
router.get('/detail', cats_controlers.cats_view_one_Page); 
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET create costume page */ 
router.get('/create',secured, cats_controlers.cats_create_Page); 
/* GET create update page */ 
router.get('/update',secured, cats_controlers.cats_update_Page); 
/* GET create costume page */ 
router.get('/delete',secured, cats_controlers.cats_delete_Page); 
 

module.exports = router;
