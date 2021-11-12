var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var cats_controller = require('../controllers/cats'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// cats ROUTES /// 
 
// POST request for creating a cats.  
router.post('/cats', cats_controller.cats_create_post); 
 
// DELETE request to delete cats. 
router.delete('/cats/:id', cats_controller.cats_delete); 
 
// PUT request to update cats. 
router.put('/cats/:id', 
cats_controller.cats_update_put); 
 
// GET request for one cats. 
router.get('/cats/:id', cats_controller.cats_detail); 
 
// GET request for list of all cats items. 
router.get('/cats', cats_controller.cats_list); 
 
module.exports = router; 